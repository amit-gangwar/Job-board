import React, { useEffect, useRef, useState } from 'react';
import {
  Chart,
  BarController,  
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card } from 'antd';
import axios from 'axios';
import { API_URLS } from '../constant';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const JobPostingChart = () => {
  const [labels, setLabels] = useState([]);
  const [score, setScore] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const getJobPostingData = async () => {
      try {
        const response = await axios.get(API_URLS.GET_JOB_POSTING_DATA);

        const scoreData = response.data.result.map((item) => item.score);
        const labelData = response.data.result.map((item) => item.name);

        setScore(scoreData);
        setLabels(labelData);
      } catch (error) {
        console.error('Error fetching job posting data:', error);
      }
    };

    getJobPostingData();
  }, []);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Filled Portion',
            data: score,
            backgroundColor: ['#8A6DFF', '#72A2FF', '#74DFFF'],
            borderRadius: 5,
            barThickness: 30,
          },
          {
            label: 'Remaining Portion',
            data: [117, 185, 170],
            backgroundColor: '#e0e0e0',
            borderRadius: 5,
            barThickness: 30,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 275,
            stacked: true,
            ticks: {
              stepSize: 25,
              callback: function (value) {
                return value;
              },
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
            },
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.raw;
              },
            },
          },
        },
        barPercentage: 1,
        categoryPercentage: 1,
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [score, labels]);

  return (
    <Card title="Your Job Posting" headStyle={{ borderBottom: 'none' }} style={{ height: '435px' }}>
      <canvas ref={chartRef} />
    </Card>
  );
};

export default JobPostingChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const CustomDonutChart = () => {
 
    const data = {
        labels: ['Total Applicants', 'Not Reviewed'],
        datasets: [
            {
                label: 'Applicants Status',
                data: [70, 30], 
                backgroundColor: ['#E1E3E7', '#8562D8'],
                borderColor: ['#FFFFFF', '#FFFFFF'], 
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const { label, formattedValue } = tooltipItem;
                        return `${label}: ${formattedValue}%`;
                    },
                },
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    padding: 20, 
                    boxWidth: 20, 
                },
            },
        },
       
        cutout: '70%', 
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default CustomDonutChart;

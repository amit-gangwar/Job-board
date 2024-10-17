import React, { useEffect, useState } from 'react';
import { Card, Col, Layout, Menu, Row } from 'antd';
import {
  ContactsFilled,
  HomeOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import './MainLayout.scss';
import AppHeader from './AppHeader/AppHeader';
import CustomCard from '../CustomCard';
import CustomDonutChart from '../CustomDonutChart';
import PrivateJobCard from '../PrivateJobCard';
import CandidatesDetailTable from '../CandidatesDetailTable';
import JobPostingChart from '../JobPostingChart';
import { API_URLS } from '../../constant';
import axios from 'axios';

const { Sider, Content } = Layout;


const MainLayout = () => {
  const [totalJobs,setTotalJobs]=useState([]);
  const [totalApplicants,setTotalApplicants]=useState([]);
  const [aiCredits,setAiCredits]=useState([]);

  useEffect(()=>{
    const getJobData = async () => {
      try {
          const response = await axios.get(API_URLS.GET_JOB_DATA);
  
          setAiCredits(response?.data?.result[0]?.ai_credits);
          setTotalJobs(response?.data?.result[0]?.total_jobs);
          setTotalApplicants(response?.data?.result[0]?.applicants);
      } catch (error) {
          console.error("Error fetching job data:", error);
         
      }
  };
  
  getJobData();
  

  },[])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />


      <Layout>

        <Sider
          width={200}
          breakpoint="lg"
          collapsedWidth="0"
          className="site-layout-background"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="0" icon={<HomeOutlined />}>
              Dashboard
            </Menu.Item>

          </Menu>
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div className="job-data-container">
              <div className="job-data-header">
                <h1>Welcome back, Lewis</h1>
                <p>Here's what's changed in your talent hunt journey!</p>
                <p>
                  You can evaluate candidates, attract job seekers, and redefine the
                  candidate experience for a new era of your workspace from here
                </p>
                <Row className="job-data-main-card-container">
                  <Col >
                    <CustomCard
                      totalJobs={totalJobs}
                      totalCandidates={totalApplicants}
                      jobsIcon={ContactsFilled}
                      candidatesIcon={UsergroupAddOutlined}
                      firstText="Total Jobs"
                      secondText="Applicants"
                    />
                    <div style={{ marginTop: '30px' }}>
                    <CustomCard
                      totalJobs={aiCredits}
                      jobsIcon={ContactsFilled}
                      firstText="AI credits"
                    />
                    </div>
                    </Col>
                    <Col>
                  <Card className='donut-container'>

                    <CustomDonutChart />
                  </Card>
                  </Col>
                  <Col>
                  <PrivateJobCard />
                  </Col>
                </Row>
              </div>
            </div>



            
            <Row gutter={[16, 16]} style={{marginTop:"140px"}}>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <CandidatesDetailTable />

              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <JobPostingChart />

              </Col>
            </Row>



          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

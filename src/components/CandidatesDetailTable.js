import React, { useEffect, useState } from 'react';
import { Card, Table, Tag } from 'antd';
import 'antd/dist/reset.css'; 
import axios from 'axios';
import { API_URLS } from '../constant';

const CandidatesDetailTable = () => {
    const [candidates,setCandidates]=useState([]);

    useEffect(()=>{
        const getApplicants = async () => {
            try {
                const response = await axios.get(API_URLS.GET_CANDIDATES_DATA);
                setCandidates(response?.data?.result);
            } catch (error) {
                console.error("Error fetching candidates data:", error);
               
            }
        };
        
        getApplicants();
        

    },[])
    const columns = [
        {
            title: 'Candidate Name',
            dataIndex: 'candidateName',
            key: 'candidateName',
        },
        {
            title: 'Job Name',
            dataIndex: 'jobName',
            key: 'jobName',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating,index) => (
                <Tag color={rating >= 7 ? 'green' : rating >= 5 ? 'orange' : 'red'} key={index}>
                    {rating}
                </Tag>
            ), 
        },
        {
            title: 'Applied Date',
            dataIndex: 'appliedDate',
            key: 'appliedDate',
        },
    ];

    

    return (
        <Card title="Latest candidates" headStyle={{ borderBottom: 'none' }}>
        
            <Table 
                dataSource={candidates} 
                columns={columns} 
                pagination={false} 
            />
            </Card>
       
    );
};

export default CandidatesDetailTable;

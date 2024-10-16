import React from 'react';
import { Card } from 'antd';

const PrivateJobCard = () => {
    return (
        <Card className="private-job-card" hoverable >
            <img 
                alt="example" 
                src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fHww" 
                className="card-image"
            />
            <h2 className="card-title">Private Job Board</h2>
            <p className="card-description">Your private job posting will appear here,accessible to the public via a company specific URL</p>
        </Card>
    );
};

export default PrivateJobCard;

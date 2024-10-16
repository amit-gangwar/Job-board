import { Card } from 'antd'
import React from 'react'

const CustomCard = ({
    totalJobs = null, 
    totalCandidates = null, 
    jobsIcon: JobsIcon,
    candidatesIcon: CandidatesIcon,
    firstText=null,
    secondText=null
}) => {
    return (
        <Card className='card-container'>
            <div className='custom-card'>
               
                {totalJobs !== null && (
                    <div className='job-section'>
                        <div className="circular-icon total-jobs-icon-background">
                            {JobsIcon && <JobsIcon className='icon-contact' />}
                        </div>
                        <span className='text-font-size'>{totalJobs}</span>
                    </div>
                )}

               
                {totalCandidates !== null && (
                    <div className='candidate-section'>
                        <div className="circular-icon applicant-icon-background">
                            {CandidatesIcon && <CandidatesIcon className='icon-contact' />}
                        </div>
                        <span className='text-font-size'>{totalCandidates}</span>
                    </div>
                )}
            </div>
            <div className='card-data'>
                {totalJobs !== null && <div className='total-jobs'>{firstText}</div>}
                {totalCandidates !== null && <div className='applicant-text'>{secondText}</div>}
            </div>
        </Card>
    );
};


export default CustomCard
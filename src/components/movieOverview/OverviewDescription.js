import React from 'react';
import '../../styles/movieOverview/OverviewDescription.css';

const OverviewDescription = ({ description }) => {
    return (
        <div className='overviewDescription'>
            <h2>Overview</h2>
            <p>{description}</p>
        </div>
    )
};

export default OverviewDescription;

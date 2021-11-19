import React from 'react';
import '../../styles/Overview/Description.css';

const OverviewDescription = ({ description, tagline }) => {
    return (
        <div className='overviewDescription'>
            <p className='tagline'>{tagline}</p>
            <h2>Overview</h2>
            <p>{description}</p>
        </div>
    )
};

export default OverviewDescription;

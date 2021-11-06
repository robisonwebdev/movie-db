import React from 'react';

const OverviewDescription = ({ description }) => {
    return (
        <div className='overDescription'>
            <h2>Overview</h2>
            <p>{description}</p>
        </div>
    )
};

export default OverviewDescription;

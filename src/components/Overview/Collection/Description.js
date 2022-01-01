import React from 'react';

const Description = ({ collection }) => {
    return (
        <div className='overview_description'>
            <h2>Overview</h2>
            <p>{collection.overview}</p>
        </div>
    )
};

export default Description;

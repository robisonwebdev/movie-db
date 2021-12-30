import React from 'react';

const Description = ({ movie }) => {
    return (
        <div className='overview_description'>
            <p className='tagline'>{movie.tagline}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
        </div>
    )
};

export default Description;

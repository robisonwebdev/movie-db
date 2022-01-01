import React from 'react';
import '../../../styles/Overview/Description.css';

const Description = ({ show }) => {
    return (
        <div className='overview_description'>
            {show.tagline === "" ? null : <p className='tagline'>{show.tagline}</p>}
            <h2>Overview</h2>
            <p>{show.overview}</p>
        </div>
    )
};

export default Description;

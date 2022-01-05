import React from 'react';
import '../../../styles/Overview/Description.css';

const Description = ({ movie }) => {
    return (
        <section className='overview_description'>
            {movie.tagline === "" ? null : <p className='tagline'>{movie.tagline}</p>}
            <h2>Overview</h2>
            <p>{movie.overview}</p>
        </section>
    )
};

export default Description;

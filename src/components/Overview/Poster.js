import React from 'react';
import '../../styles/Overview/Poster.css';

const Poster = ({ media }) => {
    const poster = `https://image.tmdb.org/t/p/w300/${media.poster_path}`;

    return (
        <img className='overview_poster' src={poster} alt={media.title} />
    )
};

export default Poster;

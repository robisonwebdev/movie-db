import React from 'react';
import '../../styles/Overview/Poster.css';

const OverviewPoster = ({ movie }) => {
    const poster = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

    return (
        <img className='overviewPoster' src={poster} alt={movie.title} />
    )
};

export default OverviewPoster;

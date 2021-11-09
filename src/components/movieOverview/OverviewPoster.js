import React from 'react';

const OverviewPoster = ({ movie }) => {
    const poster = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

    return (
        <img src={poster} alt={movie.title} />
    )
};

export default OverviewPoster;

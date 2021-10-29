import React from 'react';
import ShowDate from './ShowDate';

const Card = ({ movie }) => {
    const poster = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
    const title = movie.title;
    const releaseDate = movie.release_date;

    return (
        <div className='card'>
            <img src={poster} alt={`${title} poster`} />
            <h3>{title}</h3>
            <ShowDate value={releaseDate} />
        </div>
    )
};

export default Card;

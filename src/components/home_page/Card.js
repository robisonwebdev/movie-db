import React from 'react';
import ShowDate from './ShowDate';
import '../../styles/home_page/Card.css';

const Card = ({ movie }) => {
    const poster = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
    const title = movie.title;
    const releaseDate = movie.release_date;

    return (
        <div className='card'>
            <img src={poster} alt={`${title} poster`} />
            <div className='cardContent'>
                <h4>{title}</h4>
                <ShowDate value={releaseDate} />
            </div>            
        </div>
    )
};

export default Card;

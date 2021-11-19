import React from 'react';
import ShowDate from './ShowDate';
import '../../styles/home_page/Card.css';

const Card = ({ media }) => {
    const airDate = media.first_air_date;
    const name = media.name
    const poster = `https://image.tmdb.org/t/p/w185/${media.poster_path}`;
    const title = media.title;
    const releaseDate = media.release_date;

    return (
        <div className='card'>
            <img src={poster} alt={`${name || title} poster`} />
            <div className='cardContent'>
                <h4>{name || title}</h4>
                <ShowDate value={airDate || releaseDate} />
            </div>            
        </div>
    )
};

export default Card;

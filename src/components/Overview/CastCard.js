import React from 'react';
import '../../styles/Overview/CastCard.css';

const CastCard = ({ person }) => {
    const { character, name, profile_path } = person;

    const poster = `https://image.tmdb.org/t/p/w185/${profile_path}`;

    return (
        <div className='castCard'>
            <img src={poster} alt={name} />
            <div className='castCard_Info'>
                <h4>{name}</h4>
                <p>{character}</p>
            </div>
        </div>
    )
};

export default CastCard;

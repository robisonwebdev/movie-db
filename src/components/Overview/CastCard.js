import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Overview/CastCard.css';

const CastCard = ({ person }) => {
    const { character, name, profile_path } = person;

    const poster = `https://image.tmdb.org/t/p/w185/${profile_path}`;

    return (
        <div className='castCard'>
            <Link to={`/people/person/${person.id}`}><img src={poster} alt={name} /></Link>
            <div className='castCard_Info'>
                <Link to={`/people/person/${person.id}`}><h4>{name}</h4></Link>
                <p>{character}</p>
            </div>
        </div>
    )
};

export default CastCard;

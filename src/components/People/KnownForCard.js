import React from 'react';
import '../../styles/People/KnownForCard.css';

function KnownForCard({ image, title }) {
    return (
        <div className='knownForCard'>
            <img src={`https://image.tmdb.org/t/p/w154/${image}`} alt={`${title} poster`} />
            <p>{title}</p>
        </div>
    )
};

export default KnownForCard;

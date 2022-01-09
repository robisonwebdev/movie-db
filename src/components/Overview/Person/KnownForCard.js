import React from 'react';
import '../../../styles/Overview/Person/KnownForCard.css';

function KnownForCard({ image, title }) {
    return (
        <div className='knownForCard'>
            <img src={`https://image.tmdb.org/t/p/w150_and_h225_bestv2/${image}`} alt={`${title} poster`} />
            <p>{title}</p>
        </div>
    )
};

export default KnownForCard;

import React from 'react';

function KnownForCard({ image, title }) {
    return (
        <div className='knownForCard'>
            <img src={`https://image.tmdb.org/t/p/w154/${image}`} />
            <p>{title}</p>
        </div>
    )
};

export default KnownForCard;

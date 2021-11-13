import React from 'react';

const CastCard = ({ character, name }) => {
    return (
        <div className='castCard'>
            <img />
            <div className='castCard_Info'>
                <h4>{name}</h4>
                <p>{character}</p>
            </div>
        </div>
    )
};

export default CastCard;

import React from 'react';
import '../../styles/Search/Card.css';

const Card = ({ media }) => {
    const getImage = `https://image.tmdb.org/t/p/w94_and_h141_bestv2/${media.poster_path}`;

    return (
        <div className='result_card'>
            <img src={getImage} />
            <div className='card_content'>
                <div className='card_header'>
                    <h3>{media.title}</h3>
                    {/* Date */}
                </div>
                <div className='card_body'>
                    <p>{media.overview}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;

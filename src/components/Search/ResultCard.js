import React from 'react';
import '../../styles/Search/ResultCard.css';

const ResultCard = ({ media }) => {
    const getImage = () => {
        const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
        const imageSize = (`w94_and_h141_bestv2` || 'w90_and_h90_face' || 'w180_and_h180_face');
        const imagePath = (media.poster_path || media.profile_path);

        if (imagePath === null) {
            return noImage;
        }

        return `https://image.tmdb.org/t/p/${imageSize}/${imagePath}`;
    };

    return (
        <div className='resultCard'>
            <img src={getImage()} alt={`${media.title} poster`} />
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

export default ResultCard;

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
            
        </div>
    )
};

// Movies, TV, and maybe Collections
const MediaCard = () => {
    return (
        <>
            <img src={/* src */} alt={`/* alt */ poster`} />
            <div className='media'>
                <div className='media_header'>
                    <h3>{/* title */}</h3>
                    {/* Date */}
                </div>
                <div className='media_body'>
                    <p>{/* overview */}</p>
                </div>
            </div>
        </>
    );
};

// People
const PeopleCard = () => {
    return (
        <>
            <img src={ /* src */} alt={/* alt */} />
            <div className='people'>
                <h3>{/* title */}</h3>
                <p>{/* info */}</p>
            </div>
        </>
    );
};

// Keywords
const Keywords = () => {
    return (
        <ul className='keywords'>

        </ul>
    );
}

// Companies
const Companies = () => {
    return (
        <ul className='companies'>
            
        </ul>
    );
}

export default ResultCard;

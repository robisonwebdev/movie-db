import React from 'react';
import { Link } from 'react-router-dom';
import MediaCard from './MediaCard';
import '../../styles/Search/ResultCard.css';

const ResultCard = ({ media, type }) => {
    const getType = () => {
        if (type === 'movie' || type==='shows' || type==='collection') {
            return <MediaCard media={media} type={type} />
        }

        if (type === 'people') {
            return <PeopleCard media={media} />
        }

        if (type === 'companies') {
            return <Companies media={media} />
        }

        return <p>ERROR</p>
    }

    return (
        <div className='resultCard'>
            {getType()}
        </div>
    )
};

// People
const PeopleCard = ({ media }) => {
    const getImage = () => {
        const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
        const imageSize = (`w94_and_h141_bestv2` || 'w90_and_h90_face' || 'w180_and_h180_face');
        const imagePath = (media.profile_path);

        if (media.profile_path === null) {
            return <img className='media_image noImage' src={noImage} alt='' />;
        }

        return <img className='media_image' src={`https://image.tmdb.org/t/p/${imageSize}/${imagePath}`} alt={`${media.name || media.title} poster`} />
    };

    const getInfo = () => {
        const knownForArray = [];

        media.known_for?.forEach(item => {
            knownForArray.push(item.title || item.name);
        });

        return <p>{`${media.known_for_department} • ${knownForArray.join(', ')}`}</p>
    }

    return (
        <>
            <Link to={`/people/person/${media.id}`}>{getImage()}</Link>
            <div className='people'>
                <Link to={`/people/person/${media.id}`}><h3>{media.name}</h3></Link>
                {getInfo()}
            </div>
        </>
    );
};

// Keywords
// const Keywords = () => {
//     return (
//         <ul className='keywords'>

//         </ul>
//     );
// }

// Companies
const Companies = ({ media }) => {
    return (
        <h4 className='companies'>
            {media.name}
            {media.origin_country === "" ? null : <span>{media.origin_country}</span>}
        </h4>
    );
}

export default ResultCard;

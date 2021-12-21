import React from 'react';
import MediaCard from './MediaCard';
import PeopleCard from './PeopleCard';
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

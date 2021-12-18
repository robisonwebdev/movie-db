import React from 'react';
import '../../styles/Search/ResultCard.css';

const ResultCard = ({ media, type }) => {
    const getType = () => {
        if (type === 'movies' || type==='shows' || type==='collections') {
            return <MediaCard media={media} />
        }

        return <p>ERROR</p>
    }

    return (
        <div className='resultCard'>
            {getType()}
        </div>
    )
};

// Movies, TV, and maybe Collections
const MediaCard = ({ media }) => {
    const getDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const mediaDate = new Date(media.release_date || media.first_air_date);
        const month = mediaDate.getUTCMonth();
        const day = mediaDate.getUTCDate();
        const year = mediaDate.getUTCFullYear();

        if (!media.release_date && !media.first_air_date) {
            return;
        }

        return <p>{`${monthNames[month]} ${day}, ${year}`}</p>;
    };

    const getImage = () => {
        const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
        const imageSize = (`w94_and_h141_bestv2` || 'w90_and_h90_face' || 'w180_and_h180_face');
        const imagePath = (media.poster_path || media.profile_path);

        if (media.poster_path === null || media.poster_path === null) {
            return <img className='media_image noImage' src={noImage} alt='No Image' />;
        }

        return <img className='media_image' src={`https://image.tmdb.org/t/p/${imageSize}/${imagePath}`} alt={`${media.name || media.title} poster`} />
    };

    return (
        <>
            {getImage()}
            <div className='media_content'>
                <div className='media_header'>
                    <h3>{media.title || media.name}</h3>
                    {getDate()}
                </div>
                <div className='media_body'>
                    <p>{media.overview}</p>
                </div>
            </div>
        </>
    );
};

// People
// const PeopleCard = () => {
//     return (
//         <>
//             <img src={ /* src */} alt={/* alt */} />
//             <div className='people'>
//                 <h3>{/* title */}</h3>
//                 <p>{/* info */}</p>
//             </div>
//         </>
//     );
// };

// Keywords
// const Keywords = () => {
//     return (
//         <ul className='keywords'>

//         </ul>
//     );
// }

// Companies
// const Companies = () => {
//     return (
//         <ul className='companies'>

//         </ul>
//     );
// }

export default ResultCard;

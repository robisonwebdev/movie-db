import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCard = ({ person }) => {
    const getImage = () => {
        const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
        const imageSize = (`w94_and_h141_bestv2` || 'w90_and_h90_face' || 'w180_and_h180_face');
        const imagePath = (person.profile_path);

        if (person.profile_path === null) {
            return <img className='media_image noImage' src={noImage} alt='' />;
        }

        return <img className='media_image' src={`https://image.tmdb.org/t/p/${imageSize}/${imagePath}`} alt={`${person.name || person.title} poster`} />
    };

    const getInfo = () => {
        const knownForArray = [];

        person.known_for?.forEach(item => {
            knownForArray.push(item.title || item.name);
        });

        return <p>{`${person.known_for_department} • ${knownForArray.join(', ')}`}</p>
    }

    return (
        <div className='resultCard'>
            <Link to={`/people/person/${person.id}`}>{getImage()}</Link>
            <div className='people'>
                <Link to={`/people/person/${person.id}`}><h3>{person.name}</h3></Link>
                {getInfo()}
            </div>
        </div>
    );
};

export default PeopleCard

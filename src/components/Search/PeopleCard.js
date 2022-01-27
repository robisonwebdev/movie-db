import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Search/PeopleCard.css';

const PeopleCard = ({ person }) => {
    const getImage = () => {
        const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
        const imagePath = (person.profile_path);

        if (person.profile_path === null) {
            return <img className='people_card_image noImage' src={noImage} alt='' />;
        }

        return <img className='people_card_image' src={`https://image.tmdb.org/t/p/w90_and_h90_face/${imagePath}`} alt={person.name} />
    };

    const getInfo = () => {
        const knownForArray = [];

        person.known_for?.forEach(item => {
            knownForArray.push(item.title || item.name);
        });

        return <p>{`${person.known_for_department} • ${knownForArray.join(', ')}`}</p>
    }

    return (
        <div className='people_card'>
            <Link to={`/people/person/${person.id}`}>{getImage()}</Link>
            <div className='people_card_content'>
                <Link to={`/people/person/${person.id}`}><h3>{person.name}</h3></Link>
                {getInfo()}
            </div>
        </div>
    );
};

export default PeopleCard

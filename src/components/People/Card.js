import React from 'react';
import '../../styles/People/Card.css';

const Card = ({ person }) => {    
    const getImage = () => {
        if (person.profile_path === null) {
            return `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
        }

        return `https://image.tmdb.org/t/p/w235_and_h235_face/${person.profile_path}`;
    }

    return (
        <div className='person'>
            {console.log(person)}
            <img src={getImage()} alt={person.name} />
            <div className='personInfo'>
                <h3>{person.name}</h3>
                <p>{'movies'}</p>
            </div>
        </div>
    )
};

export default Card;

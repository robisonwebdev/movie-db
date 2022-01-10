import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/People/Card.css';

const Card = ({ person }) => {    
    const getImage = () => {
        if (person.profile_path === null) {
            return  <img
                        src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                        alt={person.name}
                        className='noImage'
                    />
        }

        return <img src={`https://image.tmdb.org/t/p/w235_and_h235_face/${person.profile_path}`} alt={person.name} />
    }

    return (
        <div className='person'>
            <Link to={`/person/${person.id}`}>{getImage()}</Link>
            <div className='personInfo'>
                <Link to={`/person/${person.id}`}><h3>{person.name}</h3></Link>
                <p>{'movies'}</p>
            </div>
        </div>
    )
};

export default Card;

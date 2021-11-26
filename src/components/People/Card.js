import React from 'react';
import '../../styles/People/Card.css';

const Card = ({ person }) => {
    const image = `https://image.tmdb.org/t/p/w300/${person.profile_path}`;

    return (
        <div className='person'>
            {console.log(person)}
            <img src={image} alt={person.name} />
            <div className='personInfo'>
                <h3>{person.name}</h3>
                <p>{'movies'}</p>
            </div>
        </div>
    )
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Overview/CollectionCard.css';

const CollectionCard = ({ collection }) => {
    const backdropImage = `http://image.tmdb.org/t/p/w1440_and_h320_multi_faces/${collection.backdrop_path}`;
    const backdropStyle = {
        background: `linear-gradient(to right, rgba(3, 37, 65, 1) 0%, rgba(3, 37, 65, 0.6) 100%), url(${backdropImage})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <section className='overview_collection_card borderBottom'>
            <div className='collection_card' style={backdropStyle}>
                <div className='collection_card_title'>
                    <h1>{`Part of the ${collection.name}`}</h1>
                </div>
                <Link to={`/collection/${collection.id}`}><button type='button'>View the Collection</button></Link>
            </div>
        </section>
    )
};

export default CollectionCard;

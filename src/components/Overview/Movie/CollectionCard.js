import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api_key from '../../../data/Key';
import '../../../styles/Overview/CollectionCard.css';

const CollectionCard = ({ collection }) => {
    const [collectionMovies, setCollectionMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const backdropImage = `http://image.tmdb.org/t/p/w1440_and_h320_multi_faces/${collection.backdrop_path}`;
    const backdropStyle = {
        background: `linear-gradient(to right, rgba(3, 37, 65, 1) 0%, rgba(3, 37, 65, 0.6) 100%), url(${backdropImage})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    const fetchData = useCallback(() => {
        const collectionAPI =  `https://api.themoviedb.org/3/collection/${collection.id}?api_key=${api_key}&language=en-US`;

        setLoading(true);

        axios
        .get(collectionAPI)
        .then(res => {
            setCollectionMovies(res.data.parts);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [collection.id]);

    const getCollectionMovies = () => {
        const movies = collectionMovies.slice(0, 3);
        const newArray = [];

        movies.forEach(movie => {
            newArray.push(movie.title);
        })

        return newArray.join(', ');
    }

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <section className='overview_collection_card borderBottom'>
            <div className='collection_card' style={backdropStyle}>
                <div className='collection_card_title'>
                    <h1>{`Part of the ${collection.name}`}</h1>
                    <p>{`Includes ${getCollectionMovies()}`}</p>
                </div>
                <Link to={`/collection/${collection.id}`}><button type='button'>View the Collection</button></Link>
            </div>
        </section>
    )
};

export default CollectionCard;

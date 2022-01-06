import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key';
import Header from './Header';
import Stats from './Stats';
import TopCast from './TopCast';
import '../../../styles/Overview/Overview.css';

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const { id } = useParams();

    const fetchData = useCallback(() => {
        const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=release_dates,credits,keywords,reviews&&language=en-US`;

        setLoading(true);

        axios
        .get(movieAPI)
        .then(res => {
            setMovieData(res.data)
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div className='overview'>
            {loading ? null : console.log('movieData:', movieData)}
            {loading ? null : <Header movie={movieData} />}
            <section className='overview_main'>
                {loading ? null : <TopCast cast={movieData.credits.cast} />}
                {loading ? null : <Stats movie={movieData} />}                
            </section>
        </div>
    )
};

export default Movie;

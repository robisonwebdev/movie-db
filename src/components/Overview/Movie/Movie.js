import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key';
import Header from '../Header';

const Movie = () => {
    const [movieData, setMovieData] = useState([]);
    const { id } = useParams();

    const fetchData = useCallback(() => {
        const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=release_dates,credits&&language=en-US`;

        axios
        .get(movieAPI)
        .then(res => {
            setMovieData(res.data)
        })
        .catch(err => console.log(err))
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div className='movie_Overview'>
            <Header media={movieData} />
        </div>
    )
};

export default Movie;

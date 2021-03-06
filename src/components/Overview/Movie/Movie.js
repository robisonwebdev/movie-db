import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key';
import CollectionCard from './CollectionCard';
import Header from './Header';
import Media from './Media';
import Recommendation from './Recommendation';
import Social from './Social';
import Stats from './Stats';
import TopCast from './TopCast';
import '../../../styles/Overview/Overview.css';

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const { id } = useParams();

    const fetchData = useCallback(() => {
        const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=credits,images,keywords,recommendations,release_dates,reviews,videos&&language=null,en,en-US`;

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
                <div className='main_left'>
                    {loading ? null : <TopCast cast={movieData.credits.cast} />}
                    {loading ? null : <Social movie={movieData} />}
                    {loading ? null : <Media movie={movieData} />}
                    {loading ? null : movieData.belongs_to_collection === null ? null : <CollectionCard collection={movieData.belongs_to_collection} />}
                    {loading ? null : <Recommendation recommendations={movieData.recommendations.results} />}
                </div>
                <div className='main_right'>
                    {loading ? null : <Stats movie={movieData} />}
                </div>                               
            </section>
        </div>
    )
};

export default Movie;

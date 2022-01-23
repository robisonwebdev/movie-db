import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api_key from '../../../data/Key';
import DisplayMedia from '../DisplayMedia';
import MediaNav from '../MediaNav';

const FreeToWatch = () => {
    const [cardData, setCardData] = useState();
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const [tvData, setTVData] = useState([]);

    const fetchData = useCallback(() => {
        const movieAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=free`;
        const tvAPI = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=free`;

        const getMovieData = axios.get(movieAPI);
        const getTVData = axios.get(tvAPI);

        setLoading(true);

        axios
        .all([getMovieData, getTVData])
        .then(axios.spread((...allData) => {
            const movie_data = allData[0].data.results;
            const tv_data = allData[1].data.results;

            setMovieData(movie_data);
            setTVData(tv_data);
            setCardData(movie_data);
            setLoading(false);
        }))
    }, []);

    const handleNav = (item) => {
        if (item === 'Movies') {
            setCardData(movieData);                     
        }

        if (item === 'TV') {
            setCardData(tvData);
        }
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <section className='home_media_container'>
            <MediaNav handleNav={handleNav} items={['Movies', 'TV']} title='Free To Watch' />
            {loading ? null : <DisplayMedia media={cardData} />}
        </section>
    );
};

export default FreeToWatch;

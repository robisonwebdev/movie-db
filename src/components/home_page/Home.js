import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import Discover from './Discover';
import '../../styles/home_page/Home.css';

const Home = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [loading, setLoading] = useState(true);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularShows, setPopularShows] = useState([]);
    const [popularInTheaters, setPopularInTheaters] = useState([]);

    const fetchData = useCallback(() => {
        const moviesAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
        const showsAPI = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
        const theatersAPI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;

        const getMoviesData = axios.get(moviesAPI);
        const getShowsData = axios.get(showsAPI);
        const getTheathersData = axios.get(theatersAPI);

        setLoading(true);

        axios
            .all([getMoviesData, getShowsData, getTheathersData])
            .then(axios.spread((...allData) => {
                const moviesData = allData[0].data;
                const showsData = allData[1].data;
                const theatersData = allData[2].data;

                setPopularMovies(moviesData);
                setPopularShows(showsData);
                setPopularInTheaters(theatersData);
                setLoading(false);
            }))
            .catch(err => console.log(err))
    }, [apiKey]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (!loading) {
            console.log('Movies', popularMovies);
            console.log('Shows', popularShows);
            console.log('Theater', popularInTheaters);
        }
    }, [loading, popularShows, popularMovies, popularInTheaters]);

    return (
        <div className='home'>
            <Welcome />
            <Discover
                className='whatsPopular'
                movies={loading ? null : popularMovies}
                shows={loading ? null : popularShows}
                selectors={['On TV', 'For Rent', 'In Theaters']}
                title="What's Popular"
            />
        </div>
    )
};

export default Home;

import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import FreeToWatch from './FreeToWatch/FreeToWatch';
import Welcome from './Welcome';
import WhatsPopular from './WhatsPopular/WhatsPopular';
import Discover from './Discover';
import '../../styles/Home/Home.css';

const Home = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [format, setFormat] = useState()
    const [freeMovies, setFreeMovies] = useState([]);
    const [freeTV, setFreeTV] = useState([]);
    const [freeToWatch, setFreeToWatch] = useState();
    const [loading, setLoading] = useState(true);
    const [whatsPopular, setWhatsPopular] = useState();
    const [popularOnTV, setPopularOnTV] = useState([]);
    const [popularForRent, setPopularForRent] = useState([]);
    const [popularStreamingMovies, setPopularStreamingMovies] = useState([]);
    const [popularStreamingShows, setPopularStreamingShows] = useState([]);
    const [popularInTheaters, setPopularInTheaters] = useState([]);

    const handleSelectors = (selector) => {
        if (selector === 'On TV') {
            setWhatsPopular(popularOnTV);
            setFormat('tv');
        }

        if (selector === 'For Rent') {
            setWhatsPopular(popularForRent);
            setFormat('movie');
        }

        if (selector === 'In Theaters') {
            setWhatsPopular(popularInTheaters);
            setFormat('movie');
        }

        if (selector === 'Movies') {
            setFreeToWatch(freeMovies);
            setFormat('movie');
        }

        if (selector === 'TV') {
            setFreeToWatch(freeTV);
            setFormat('tv');
        }
    }

    const mediaAPI = useCallback((format, monetization, page, sort) => {
        if (format === 'movie') {
            return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sort || 'popularity.desc'}&include_adult=true&include_video=false&page=${page || '1'}&watch_region=US&&with_watch_monetization_types=${monetization || 'flatrate'}`;
        };
    
        if (format === 'tv') {
            return `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=${sort || 'popularity.desc'}&page=${page || '1'}&timezone=America%2FNew_York&include_null_first_air_dates=false&watch_region=US&with_watch_monetization_types=${monetization || 'flatrate'}&with_status=0&with_type=0`;
        }
    }, [apiKey]);

    const fetchData = useCallback(() => {    
        const streamingMoviesAPI = mediaAPI('movie', 'flatrate', 1, 'popularity.desc');
        const streamingShowsAPI = mediaAPI('tv', 'flatrate', 1, 'popularity.desc');
        const TVAPI = mediaAPI('tv', 'flatrate', 1, 'popularity.desc');
        const forRentAPI = mediaAPI('movie', 'rent', 1, 'popularity.desc');
        const theatersAPI = mediaAPI('movie', 'buy', 1, 'popularity.desc');
        const freeMoviesAPI = mediaAPI('movie', 'free', 1, 'popularity.desc');
        const freeTVAPI = mediaAPI('tv', 'free', 1, 'popularity.desc');

        const getStreamingMoviesData = axios.get(streamingMoviesAPI);
        const getStreamingShowsData = axios.get(streamingShowsAPI);
        const getTVData = axios.get(TVAPI);
        const getForRentData = axios.get(forRentAPI);
        const getTheathersData = axios.get(theatersAPI);
        const getFreeMovies = axios.get(freeMoviesAPI);
        const getFreeTV = axios.get(freeTVAPI);

        setLoading(true);

        axios
            .all([getStreamingMoviesData, getStreamingShowsData, getTVData, getForRentData, getTheathersData, getFreeMovies, getFreeTV])
            .then(axios.spread((...allData) => {
                const streamingMoviesData = allData[0].data.results;
                const streamingShowsData = allData[1].data.results;
                const TVData = allData[2].data.results;
                const forRentData = allData[3].data.results;
                const theatersData = allData[4].data.results;
                const freeMoviesData = allData[5].data.results;
                const freeTVData = allData[6].data.results;

                setPopularStreamingMovies(streamingMoviesData)
                setPopularStreamingShows(streamingShowsData)
                setPopularOnTV(TVData);
                setPopularForRent(forRentData);
                setPopularInTheaters(theatersData);
                setFreeMovies(freeMoviesData);
                setFreeTV(freeTVData);
                setLoading(false);
            }))
            .catch(err => console.log(err))
    }, [mediaAPI]);

    return (
        <div className='home'>
            <Welcome />
            <WhatsPopular />
            <FreeToWatch />
        </div>
    )
};

export default Home;



import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import Discover from './Discover';
import '../../styles/home_page/Home.css';

const Home = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [freeMovies, setFreeMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [whatsPopular, setWhatsPopular] = useState();
    const [popularOnTV, setPopularOnTV] = useState([]);
    const [popularForRent, setPopularForRent] = useState([]);
    const [popularStreaming, setPopularStreaming] = useState([]);
    const [popularStreamingMovies, setPopularStreamingMovies] = useState([]);
    const [popularStreamingShows, setPopularStreamingShows] = useState([]);
    const [popularInTheaters, setPopularInTheaters] = useState([]);

    const handleSelectors = (selector) => {
        if (selector === 'On TV') {
            setWhatsPopular(popularOnTV);
        }

        if (selector === 'For Rent') {
            setWhatsPopular(popularForRent);
        }

        if (selector === 'In Theaters') {
            setWhatsPopular(popularInTheaters);
        }
    }

    const fetchData = useCallback(() => {
        const streamingMoviesAPI = ` https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
        const streamingShowsAPI = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
        const TVAPI = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&watch_region=US&with_watch_monetization_types=flatrate`;
        const forRentAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&watch_region=US&with_watch_monetization_types=rent`;
        const theatersAPI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
        const freeMoviesAPI = ` https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&watch_region=US&with_watch_monetization_types=free`;

        const getStreamingMoviesData = axios.get(streamingMoviesAPI);
        const getStreamingShowsData = axios.get(streamingShowsAPI);
        const getTVData = axios.get(TVAPI);
        const getForRentData = axios.get(forRentAPI);
        const getTheathersData = axios.get(theatersAPI);
        const getFreeMovies = axios.get(freeMoviesAPI);

        setLoading(true);

        axios
            .all([getStreamingMoviesData, getStreamingShowsData, getTVData, getForRentData, getTheathersData, getFreeMovies])
            .then(axios.spread((...allData) => {
                const streamingMoviesData = allData[0].data;
                const streamingShowsData = allData[1].data;
                const TVData = allData[2].data;
                const forRentData = allData[3].data;
                const theatersData = allData[4].data;
                const freeMoviesData = allData[5].data;

                setPopularStreamingMovies(streamingMoviesData)
                setPopularStreamingShows(streamingShowsData)
                setPopularOnTV(TVData);
                setPopularForRent(forRentData);
                setPopularInTheaters(theatersData);
                setFreeMovies(freeMoviesData);
                setLoading(false);
            }))
            .catch(err => console.log(err))
    }, [apiKey]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (!loading) {
            console.log('Streaming Movie', popularStreamingMovies);
            console.log('Streaming Shows', popularStreamingShows);
            console.log('TV', popularOnTV);
            console.log('For Rent', popularForRent);
            console.log('Theater', popularInTheaters);
        }
    }, [loading, popularStreamingMovies, popularStreamingShows, popularOnTV, popularForRent, popularInTheaters]);

    return (
        <div className='home'>
            <Welcome />
            {loading
                ?   null
                :   <Discover
                        className='whatsPopular'
                        handleSelectors={handleSelectors}
                        items={whatsPopular || popularOnTV}
                        loading={loading}
                        selectors={['On TV', 'For Rent', 'In Theaters']}
                        title="What's Popular"
                    />
            }
            {loading
                ?   null
                :   <Discover 
                        className='freeToWatch'
                        handleSelectors={handleSelectors}
                        items={freeMovies}
                        selectors={['Movies', 'TV']}
                        title='Free To Watch'
                    />    
            }
        </div>
    )
};

export default Home;

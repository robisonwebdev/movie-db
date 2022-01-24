import React from 'react';
import FreeToWatch from './FreeToWatch/FreeToWatch';
import Trending from './Trending/Trending';
import Welcome from './Welcome/Welcome';
import WhatsPopular from './WhatsPopular/WhatsPopular';
import '../../styles/Home/Home.css';

const Home = () => {
    // const mediaAPI = useCallback((format, monetization, page, sort) => {
    //     if (format === 'movie') {
    //         return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sort || 'popularity.desc'}&include_adult=true&include_video=false&page=${page || '1'}&watch_region=US&&with_watch_monetization_types=${monetization || 'flatrate'}`;
    //     };
    
    //     if (format === 'tv') {
    //         return `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=${sort || 'popularity.desc'}&page=${page || '1'}&timezone=America%2FNew_York&include_null_first_air_dates=false&watch_region=US&with_watch_monetization_types=${monetization || 'flatrate'}&with_status=0&with_type=0`;
    //     }
    // }, [apiKey]);

    // const fetchData = useCallback(() => {    
    //     const streamingMoviesAPI = mediaAPI('movie', 'flatrate', 1, 'popularity.desc');
    //     const streamingShowsAPI = mediaAPI('tv', 'flatrate', 1, 'popularity.desc');
    //     const TVAPI = mediaAPI('tv', 'flatrate', 1, 'popularity.desc');
    //     const forRentAPI = mediaAPI('movie', 'rent', 1, 'popularity.desc');
    //     const theatersAPI = mediaAPI('movie', 'buy', 1, 'popularity.desc');
    //     const freeMoviesAPI = mediaAPI('movie', 'free', 1, 'popularity.desc');
    //     const freeTVAPI = mediaAPI('tv', 'free', 1, 'popularity.desc');

    //     const getStreamingMoviesData = axios.get(streamingMoviesAPI);
    //     const getStreamingShowsData = axios.get(streamingShowsAPI);
    //     const getTVData = axios.get(TVAPI);
    //     const getForRentData = axios.get(forRentAPI);
    //     const getTheathersData = axios.get(theatersAPI);
    //     const getFreeMovies = axios.get(freeMoviesAPI);
    //     const getFreeTV = axios.get(freeTVAPI);

    //     setLoading(true);

    //     axios
    //         .all([getStreamingMoviesData, getStreamingShowsData, getTVData, getForRentData, getTheathersData, getFreeMovies, getFreeTV])
    //         .then(axios.spread((...allData) => {
    //             const streamingMoviesData = allData[0].data.results;
    //             const streamingShowsData = allData[1].data.results;
    //             const TVData = allData[2].data.results;
    //             const forRentData = allData[3].data.results;
    //             const theatersData = allData[4].data.results;
    //             const freeMoviesData = allData[5].data.results;
    //             const freeTVData = allData[6].data.results;

    //             setPopularStreamingMovies(streamingMoviesData)
    //             setPopularStreamingShows(streamingShowsData)
    //             setPopularOnTV(TVData);
    //             setPopularForRent(forRentData);
    //             setPopularInTheaters(theatersData);
    //             setFreeMovies(freeMoviesData);
    //             setFreeTV(freeTVData);
    //             setLoading(false);
    //         }))
    //         .catch(err => console.log(err))
    // }, [mediaAPI]);

    return (
        <div className='home'>
            <Welcome />
            <WhatsPopular />
            <FreeToWatch />
            <Trending />
        </div>
    )
};

export default Home;



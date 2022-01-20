import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api_key from '../../../data/Key';

const WhatsPopular = () => {
    const [loading, setLoading] = useState(true);
    const [rentData, setRentData] = useState([]);
    const [theatherData, setTheatherData] = useState([]);
    const [tvData, setTVData] = useState([]);
    
    const getTodaysDate = (laterDate) => {
        const today = new Date();
        const day = today.getUTCDate();
        const month = today.getUTCMonth() + 1;
        const year = today.getUTCFullYear();

        return `${year}-${month}-${day}`;
    };

    const fetchData = useCallback(() => {
        const rentAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=rent`;
        const theatherAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_release_type=3&with_watch_monetization_types=buy`;
        const tvAPI = ` https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;

        const getRentData = axios.get(rentAPI);
        const getTheatherData = axios.get(theatherAPI);
        const getTVData = axios.get(tvAPI);

        setLoading(true);

        axios
        .all([getRentData, getTheatherData, getTVData])
        .then(axios.spread((...allData) => {
            const rent_Data = allData[0].data.results;
            const theather_Data = allData[1].data.results;
            const tv_Data = allData[2].data.results;

            setRentData(rent_Data);
            setTheatherData(theather_Data);
            setTVData(tv_Data);
            setLoading(false);
        }))
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <section className='home_media_content'>
            
        </section>
    )
};

export default WhatsPopular;

import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api_key from '../../../data/Key';
import DisplayMedia from '../DisplayMedia';
import MediaNav from '../MediaNav';

const Trending = () => {
    const [cardData, setCardData] = useState();
    const [loading, setLoading] = useState(true);
    const [todayData, setTodayData] = useState([]);
    const [weekData, setWeekDate] = useState([]);

    const fetchData = useCallback(() => {
        const todayAPI = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`;
        const weekAPI = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`;

        const getTodayData = axios.get(todayAPI);
        const getWeekData = axios.get(weekAPI);

        setLoading(true);

        axios
        .all([getTodayData, getWeekData])
        .then(axios.spread((...allData) => {
            const today_data = allData[0].data.results;
            const week_data = allData[1].data.results;

            setTodayData(today_data);
            setWeekDate(week_data);
            setCardData(today_data);
            setLoading(false);
        }))
        .catch(err => console.log(err))
    }, []);

    return (
        <section className='home_media_container'>

        </section>
    );
};

export default Trending;

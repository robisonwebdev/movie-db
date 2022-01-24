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
    const backgroundImage = 'https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg';
    const backgroundStyle = {
        background: `url(${backgroundImage})`,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    };

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

    const handleNav = (item) => {
        if (item === 'Today') {
            setCardData(todayData);                     
        }

        if (item === 'This Week') {
            setCardData(weekData);
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <section className='home_media_container'>
            <MediaNav handleNav={handleNav} items={['Today', 'This Week']} title='Trending' />
            {loading ? null : <DisplayMedia media={cardData} style={backgroundStyle} />}
        </section>
    );
};

export default Trending;

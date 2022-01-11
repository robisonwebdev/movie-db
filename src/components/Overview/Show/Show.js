import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key'
import Header from './Header';

const Show = () => {
    const [loading, setLoading] = useState(true);
    const [showData, setShowData] = useState([]);
    const { id } = useParams();

    const fetchData = useCallback(() => {
        const showAPI = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&append_to_response=first_air_date,credits,content_ratings&language=en-US`;

        setLoading(true);

        axios
        .get(showAPI)
        .then(res => {
            setShowData(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='overview'>
            {loading ? null : console.log('showData', showData)}
            {loading ? null : <Header show={showData} />}
            <section className='overview_main'>
                <div className='main_left'></div>
                <div className='main_right'></div>
            </section>
        </div>
    )
};

export default Show;

import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key'
import Header from '../Header';

const Show = () => {
    const [showData, setShowData] = useState([]);
    const { id } = useParams();

    const fetchData = useCallback(() => {
        const showAPI = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&append_to_response=first_air_date,credits,content_ratings&language=en-US`;

        axios
        .get(showAPI)
        .then(res => {
            setShowData(res.data);
        })
        .catch(err => console.log(err))
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='overview'>
            <Header media={showData} format='show' />
            {console.log('showData', showData)}
        </div>
    )
};

export default Show;

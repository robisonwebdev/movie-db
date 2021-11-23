import React, { useCallback, useEffect, useState } from 'react';
import FilterPanel from './FilterPanel';
import ResultPanel from './ResultPanel';
import '../../styles/Media/Media.css';
import axios from 'axios';

const Media = ({ format, get, page, title }) => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [loading, setLoading] = useState(true);
    const [media, setMedia] = useState([]);
    const [sortBy, setSortBy] = useState('pop_des');

    const fetchData = useCallback(() => {
        const getAPI = ` https://api.themoviedb.org/3/${format}/${get}?api_key=${apiKey}&language=en-US&page=${page || '1'}`;

        setLoading(true);

        axios
        .get(getAPI)
        .then(res => {
            setMedia(res.data.results);
            setLoading(false);
        })
        .catch(err => console.log(err))

    }, [apiKey, format, get, page]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div className='media'>
            <h2>{title || 'Title'}</h2>
            <div className='results'>
                <FilterPanel setSortBy={setSortBy} />
                <ResultPanel media={media} sortBy={sortBy} />
            </div>
        </div>
    )
};

export default Media;

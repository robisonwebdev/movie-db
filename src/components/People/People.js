import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import '../../styles/People/People.css';

const People = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [loading, setLoading] = useState(true);
    const [popularPeople, setPopularPeople] = useState([]);

    const fetchData = useCallback((page) => {
        const peopleAPI = ` https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=${page}`;

        setLoading(true);

        axios
        .get(peopleAPI)
        .then(res => {
            setPopularPeople(res.data.results);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [apiKey]);

    useEffect(() => {
        fetchData('1');
    }, [fetchData]);

    return (
        <div>
            {loading ? null : console.log(popularPeople)}
        </div>
    )
};

export default People;

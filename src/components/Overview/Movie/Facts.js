import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import api_key from '../../../data/Key';
import '../../../styles/Overview/Facts.css';

const Facts = ({ movie }) => {
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const { budget, original_language, revenue, status } = movie;

    const fetchData = useCallback(() => {
        const languagesAPI = ` https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`;

        setLoading(true);

        axios
        .get(languagesAPI)
        .then(res => {
            setLanguages(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, []);

    const getBudget = () => {
        if (budget === 0) {
            return '-';
        }

        return `$${budget.toLocaleString('en-US')}`;
    }

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const getLanguageString = () => {  
        let language = '';

        languages.forEach(obj => {
            if (obj['iso_639_1'] === original_language) {
                language = obj.english_name;
            }
        })

        return language;
    }

    return (
        <section className='overview_facts'>
            <div>
                <strong>Status</strong>
                <p>{status}</p>
            </div>
            <div>
                <strong>Original Language</strong>
                <p>{loading ? null : getLanguageString()}</p>
            </div>
            <div>
                <strong>Budget</strong>
                <p>{getBudget()}</p>
            </div>
            <div>
                <strong>Revenue</strong>
                <p>{`$${revenue.toLocaleString('en-US')}`}</p>
            </div>
        </section>
    )
};

export default Facts;

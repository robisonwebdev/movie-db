import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api_key from '../../../data/Key';
import '../../../styles/Overview/Facts.css';

const Facts = ({ show }) => {
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const { networks, original_language, status, type } = show;

    const getLanguageString = () => {  
        let language = '';

        languages.forEach(obj => {
            if (obj['iso_639_1'] === original_language) {
                language = obj.english_name;
            }
        });

        return language;
    }

    const getNetwork = () => {
        const networkLogo = `http://image.tmdb.org/t/p/h30/${networks[0]?.logo_path}`;

        if (networks.length === 0) return '-';

        return <img src={networkLogo} alt={networks.name} />
    };

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

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <section className='overview_facts'>
            <h3>Facts</h3>
            <div>
                <strong>Status</strong>
                <p>{status}</p>
            </div>
            <div>
                <strong>Network</strong>
                {getNetwork()}
            </div>
            <div>
                <strong>Type</strong>
                <p>{type}</p>
            </div>
            <div>
                <strong>Original Language</strong>
                <p>{loading ? null : getLanguageString()}</p>
            </div>
        </section>
    )
};

export default Facts;
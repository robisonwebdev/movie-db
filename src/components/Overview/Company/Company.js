import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key';
import Header from './Header';
import MediaList from './MediaList';

const Company = () => {
    const [companyData, setCompanyData] = useState([]);
    const [companyMovieData, setCompanyMovieData] = useState([]);
    const [companyTVData, setCompanyTVData] = useState([]);
    const [format, setFormat] = useState('');
    const [loading, setLoading] = useState(true);
    const [mediaData, setMediaData] = useState([]);
    const { id } = useParams();

    const fetchData = useCallback(() => {
        const company_API = `https://api.themoviedb.org/3/company/${id}?api_key=${api_key}`;
        const companyMovie_API = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${id}`;
        const companyTV_API = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_companies=${id}`;

        const getCompanyData = axios.get(company_API);
        const getCompanyMovieData = axios.get(companyMovie_API);
        const getCompanyTVData = axios.get(companyTV_API);

        setLoading(true);

        axios
        .all([getCompanyData, getCompanyMovieData, getCompanyTVData])
        .then(axios.spread((...all_Data) => {
            const company_Data = all_Data[0].data;
            const companyMovie_Data = all_Data[1].data;
            const companyTV_Data = all_Data[2].data;

            setCompanyData(company_Data);
            setCompanyMovieData(companyMovie_Data);
            setCompanyTVData(companyTV_Data);
            setMediaData(companyMovie_Data);
            setFormat('movie');
            setLoading(false);
        }))
        .catch(err => console.log(err))
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <section className='overview'>
            {loading ? null : <Header data={[companyData, mediaData]} format={format} />}
            {loading ? null : <MediaList data={mediaData} format={format} />}
        </section>
    )
};

export default Company;

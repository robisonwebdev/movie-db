import React, { useCallback, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Filter from './Filter';
import Search from './Search';
import '../../styles/Search/ResultsPage.css';

const ResultsPage = () => {
    const { searchParam } = useParams();
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [collections, setCollections] = useState([]);
    const [companies, setComponies] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
    const [shows, setShows] = useState([]);

    const filters = [
        {
            filter: shows,
            name: 'TV Shows'
        },
        {
            filter: movies,
            name: 'Movies'
        },
        {
            filter: people,
            name: 'People'
        },
        {
            filter: keywords,
            name: 'Keywords'
        },
        {
            filter: collections, 
            name: 'Collections'
        },
        {
            filter: companies,
            name: 'Companies'
        }
    ];

    const buildFiltersList = filters.map(obj => {
        return <Filter number={obj.filter.total_results} title={obj.name} />
    });

    const fetchData = useCallback(() => {
        const collections_API = `https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&language=en-US&query=${searchParam}&page=1`;
        const companies_API = `https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${searchParam}&page=1`;
        const keywords_API = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${searchParam}&page=1`;
        const movies_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchParam}&page=1&include_adult=false`;
        const people_API = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${searchParam}&page=1&include_adult=false`;
        const shows_API = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${searchParam}&include_adult=false`;

        const getCollections_Data = axios.get(collections_API);
        const getCompanies_Data = axios.get(companies_API);
        const getKeywords_Data = axios.get(keywords_API);
        const getMovies_Data = axios.get(movies_API);
        const getPeople_Data = axios.get(people_API);
        const getShows_Data = axios.get(shows_API);

        setLoading(true);

        axios
        .all([getCollections_Data, getCompanies_Data, getKeywords_Data, getMovies_Data, getPeople_Data, getShows_Data])
        .then(axios.spread((...all_Data) => {
            const collections_Data = all_Data[0].data;
            const companies_Data = all_Data[1].data;
            const keywords_Data = all_Data[2].data;
            const movies_Data = all_Data[3].data;
            const people_Data = all_Data[4].data;
            const shows_Data = all_Data[5].data;

            setCollections(collections_Data);
            setComponies(companies_Data);
            setKeywords(keywords_Data);
            setMovies(movies_Data);
            setPeople(people_Data);
            setShows(shows_Data);
            setLoading(false);
        }))
    }, [apiKey, searchParam]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    useEffect(() => {
        if (!loading) {
            console.log(`Collection`, collections);
            console.log(`Companies`, companies);
            console.log(`Keywords`, keywords);
            console.log(`Movies`, movies);
            console.log(`People`, people);
            console.log(`Shows`, shows);
        }
    }, [loading, collections, companies, keywords, movies, people, shows]);

    return (
        <section className='resultsPage'>
            <div className='resultsPage_Search'>
                <Search />
            </div>
            <div className='resultsPage_Content'>
                <h2>Search Results</h2>
                <div className='filters'>
                    {buildFiltersList}
                </div>
            </div>
        </section>
    )
};

export default ResultsPage;

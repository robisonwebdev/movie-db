import React, { useCallback, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import api_key from '../../data/Key';
import SearchBar from './SearchBar';
import Pagination from '../Pagination';
import ResultsPanel from './ResultsPanel/ResultsPanel';
import '../../styles/Search/ResultsPage.css';
import Results from './Results';

const ResultsPage = () => {
    const { searchParam } = useParams();
    const [collections, setCollections] = useState([]);
    const [companies, setComponies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [keywords, setKeywords] = useState([]);
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
    const [searchValue, setSearchValue] = useState(searchParam);
    const [shows, setShows] = useState([]);
    const [mediaList, setMediaList] = useState([]);
    const [mediaID, setMediaID] = useState('') 

    const fetchData = useCallback((query) => {
        const collections_API = `https://api.themoviedb.org/3/search/collection?api_key=${api_key}&language=en-US&query=${query}&page=1`;
        const companies_API = `https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=${query}&page=1`;
        const keywords_API = `https://api.themoviedb.org/3/search/keyword?api_key=${api_key}&query=${query}&page=1`;
        const movies_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
        const people_API = `https://api.themoviedb.org/3/search/person?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
        const shows_API = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&page=1&query=${query}&include_adult=false`;

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
            setMediaList(shows_Data);
            setLoading(false);
        }))
    }, []);

    // Runs on initial render and searchValue change.
    useEffect(() => {
        fetchData(searchValue);
    }, [fetchData, searchValue]);

    const testFun = () => {
        const filtersArray = [
            {
                filter: shows,
                id: 'shows_001',
                name: 'TV Shows',
                type: 'tv'
            },
            {
                filter: movies,
                id: 'movies_001',
                name: 'Movies',
                type: 'movie'
            },
            {
                filter: people,
                id: 'people_001',
                name: 'People',
                type: 'people'
            },
            {
                filter: keywords,
                id: 'keywords_001',
                name: 'Keywords',
                type: 'keywords'
            },
            {
                filter: collections,
                id: 'collections_001', 
                name: 'Collections',
                type: 'collection'
            },
            {
                filter: companies,
                id: 'companies_001',
                name: 'Companies',
                type: 'companies'
            }
        ];

        filtersArray.sort((a, b) => {
            return b.filter.total_results - a.filter.total_results;
        });

        setFilters(filtersArray);
        setMediaList(filtersArray[0].filter);
        setMediaID(filtersArray[0].id)
    };

    useEffect(() => {
        if (!loading) {
            testFun();
        }
    }, [loading]);

    return (
        <section className='search_results_page'>
            <div className='results_page_searchbar'>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='results_page_content'>                
                <ResultsPanel results={[collections, companies, keywords, movies, people, shows]} setMediaList={setMediaList} setMediaID={setMediaID} />
                <div className='results_list'>
                    <Results mediaList={mediaList} mediaID={mediaID} />
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={mediaList.total_pages} />
                </div>
            </div>
        </section>
    )
};

export default ResultsPage;

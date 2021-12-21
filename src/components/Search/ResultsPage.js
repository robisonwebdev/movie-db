import React, { useCallback, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Filter from './Filter';
import Search from './Search';
import '../../styles/Search/ResultsPage.css';
import Results from './Results';

const ResultsPage = () => {
    const { searchParam } = useParams();
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [collections, setCollections] = useState([]);
    const [companies, setComponies] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
    const [searchValue, setSearchValue] = useState(searchParam);
    const [shows, setShows] = useState([]);
    const [mediaList, setMediaList] = useState([]);
    const [mediaType, setMediaType] = useState('')

    const handleFilterSelection = (filter) => {
        filters.forEach(object => {
            if (filter === object.filter) {
                setMediaList(object.filter);
                setMediaType(object.type);
            }
        })
    };

    const buildFiltersList = filters.map(obj => {
        return <Filter key={obj.id} number={obj.filter.total_results} onClick={() => handleFilterSelection(obj.filter)} title={obj.name} />
    });   

    const fetchData = useCallback((query) => {
        const collections_API = `https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&language=en-US&query=${query}&page=1`;
        const companies_API = `https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${query}&page=1`;
        const keywords_API = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${query}&page=1`;
        const movies_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        const people_API = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        const shows_API = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${query}&include_adult=false`;

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
    }, [apiKey]);

    useEffect(() => {
        fetchData(searchValue);
    }, [fetchData, searchValue])

    useEffect(() => {
        if (!loading) {
            const filtersArray = [
                {
                    filter: shows,
                    id: 'shows_001',
                    name: 'TV Shows',
                    type: 'shows'
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
            setMediaType(filtersArray[0].type)
            // console.log(`Collection`, collections);
            console.log(`Companies`, companies);
            // console.log(`Keywords`, keywords);
            // console.log(`Movies`, movies);
            // console.log(`People`, people);
            // console.log(`Shows`, shows);
        }
    }, [loading, collections, companies, keywords, movies, people, shows]);

    return (
        <section className='resultsPage'>
            <div className='resultsPage_Search'>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='resultsPage_Content'>                
                <div className='filters'>
                    <h3>Search Results</h3>
                    <div className='filter_List'>
                        {buildFiltersList}
                    </div>
                </div>
                <Results media={mediaList} type={mediaType} />
            </div>
        </section>
    )
};

export default ResultsPage;

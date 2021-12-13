import React, { useCallback, useState} from 'react';
import { useParams } from 'react-router';
import '../../styles/Search/ResultsPage.css';

const ResultsPage = () => {
    const { searchParam } = useParams();
    const [collections, setCollections] = useState([]);
    const [companies, setComponies] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [movies, setMovies] = useState([]);
    const [networks, setNetworks] = useState([]);
    const [people, setPeople] = useState([]);
    const [shows, setShows] = useState([]);

    const fetchData = useCallback(() => {

    })

    return (
        <section className='results_Page'>
            Results
        </section>
    )
};

export default ResultsPage;

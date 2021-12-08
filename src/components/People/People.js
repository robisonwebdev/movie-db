import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../../styles/People/People.css';
import Pagination from '../Pagination';

const People = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [popularPeople, setPopularPeople] = useState([]);
    const [totalPages, setTotalPages] = useState();

    const buildCards = popularPeople.map(person => {
        return <Card key={person.id} person={person} />
    });

    const fetchData = useCallback((page) => {
        const peopleAPI = ` https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=${page}`;

        setLoading(true);

        axios
        .get(peopleAPI)
        .then(res => {
            setPopularPeople(res.data.results);
            setTotalPages(res.data.total_pages);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [apiKey]);

    useEffect(() => {
        fetchData(currentPage);
    }, [fetchData, currentPage]);

    return (
        <section className='popularPeople'>
            <h2>Popular People</h2>
            <div className='people_content'>
                {loading ? null : buildCards}
            </div>
            {loading ? null : <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}
        </section>
    )
};

export default People;

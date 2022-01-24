import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../../../styles/Home/Search.css';

const Search = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`search/${value}`);
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleChange} placeholder='Search for a movie, tv show, person......' />
            <button type='submit'>Search</button>
        </form>
    )
};

export default Search;

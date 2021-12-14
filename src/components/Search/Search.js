import React, { useState } from 'react';
import '../../styles/Search/Search.css';

const Search = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder='Search for a movie, tv show, person...' type='text' value={value} />
        </form>
    )
};

export default Search;

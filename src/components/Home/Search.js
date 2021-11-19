import React from 'react';
import '../../styles/home_page/Search.css';

const Search = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search for a movie, tv show, person......' />
            <button type='submit'>Search</button>
        </form>
    )
};

export default Search;

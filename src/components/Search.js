import React from 'react';
import '../styles/Search.css';

const Search = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search for a movie, tv show, person......' />
            <button>Search</button>
        </form>
    )
};

export default Search;

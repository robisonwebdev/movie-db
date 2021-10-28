import React from 'react';
import '../styles/Search.css';

const Search = () => {
    return (
        <form className='search'>
            <input type='text' placeholder='Search for a movie, tv show, person......' />
            <button>Search</button>
        </form>
    )
};

export default Search;

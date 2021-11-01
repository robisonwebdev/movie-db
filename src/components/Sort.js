import React from 'react';
import '../styles/Sort.css';

const Sort = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className='sort' onSubmit={handleSubmit}>
            <label>Sort Results By</label>
            <select>
                <option>Popularity Descending</option>
                <option>Popularity Ascending</option>
                <option>Rating Descending</option>
                <option>Rating Ascending</option>
                <option>Release Date Descending</option>
                <option>Release Date Ascending</option>
                <option>Title (A-Z)</option>
                <option>Title (Z-A)</option>
            </select>
        </form>
    )
};

export default Sort;

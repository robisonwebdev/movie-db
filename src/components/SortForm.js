import React from 'react';

const SortForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='sortContent'>
            <form className='sortForm' onSubmit={handleSubmit}>
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
        </div>
    )
};

export default SortForm;

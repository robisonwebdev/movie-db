import React, { useState } from 'react';
import '../styles/Sort.css';

const Sort = () => {
    const [showContent, setShowContent] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='sort'>
            <div className='sortTitle'>Sort</div>
            <div className={`sortContent ${showContent ? 'showContent' : ''}`}>
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
        </div>
    )
};

export default Sort;
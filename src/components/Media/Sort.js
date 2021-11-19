import React from 'react';
import '../styles/Sort.css';

const Sort = ({ onChange, value }) => {
    return (
        <div className='sort'>
            <label>Sort Results By</label>
            <select value={value} onChange={onChange}>
                <option value='pop_des'>Popularity Descending</option>
                <option value='pop_asc'>Popularity Ascending</option>
                <option value='rate_des'>Rating Descending</option>
                <option value='rate_asc'>Rating Ascending</option>
                <option value='rel_des'>Release Date Descending</option>
                <option value='res_asc'>Release Date Ascending</option>
                <option value='title_az'>Title (A-Z)</option>
                <option value='title_za'>Title (Z-A)</option>
            </select>
        </div>
    )
};

export default Sort;

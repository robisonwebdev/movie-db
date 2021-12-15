import React from 'react';
import '../../styles/Search/Filter.css';

const Filter = ({ number, title }) => {
    return (
        <div className='filter'>
            <p className='filter_title'>{title}</p>
            <p className='filter_number'>{number}</p>
        </div>
    )
};

export default Filter;

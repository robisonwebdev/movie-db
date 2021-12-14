import React from 'react';
import '../../styles/Search/Filter.css';

const Filter = ({ number, title }) => {
    return (
        <div className='filter'>
            <p>{title}</p>
            <p>{number}</p>
        </div>
    )
};

export default Filter;

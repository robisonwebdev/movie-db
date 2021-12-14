import React from 'react';

const Filter = ({ number, title }) => {
    return (
        <div className='filter'>
            <p>{title}</p>
            <p>{number}</p>
        </div>
    )
};

export default Filter;

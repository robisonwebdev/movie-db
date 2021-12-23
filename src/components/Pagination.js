import React, { useState } from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const [value, setValue] = useState(currentPage);

    const handleDecrease = () => {
        return value === 1 ? null : setValue(value - 1);
    };

    const handleIncrease = () => {
        return value === totalPages ? null : setValue(value + 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentPage(parseInt(value));
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form className='pagination' onSubmit={handleSubmit}>
            <button type='submit'><i className='las la-angle-left' onClick={handleDecrease} /></button>
            <input
                onChange={onChange}
                max={totalPages}
                min='1'
                type='number'
                value={value}
            />
            <button type='submit'><i className='las la-angle-right' onClick={handleIncrease} /></button>
        </form>
    )
};

export default Pagination;

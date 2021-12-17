import React, { useState } from 'react';
import '../../styles/Search/Search.css';

const Search = ({ setSearchValue }) => {
    const [value, setValue] = useState('');
    const [showCancelIcon, setShowCancelIcon] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleMouseEnter = () => {
        if (value === '') {
            setShowCancelIcon(false);
        } else {
            setShowCancelIcon(true);
        }
    }

    const handleMouseLeave = () => {
        if (value === '') {
            setShowCancelIcon(false);
        } else {
            setShowCancelIcon(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchValue(value);
    }

    return (
        <form onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onSubmit={handleSubmit}>
            <i className='las la-search' />
            <input
                onChange={handleChange}                
                placeholder='Search for a movie, tv show, person...'
                type='text'
                value={value}
            />
            {showCancelIcon ? <i className='las la-times' /> : null}
        </form>
    )
};

export default Search;

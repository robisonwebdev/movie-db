import React, { useState } from 'react';
import SortForm from './SortForm';
import '../styles/Sort.css';

const Sort = () => {
    const [showContent, setShowContent] = useState(false);

    const handleSortClick = () => {
        setShowContent(!showContent);
    };

    return (
        <div className='sort'>
            <div className='sortTitle' onClick={handleSortClick}>
                <p>Sort</p>
                {showContent ? <i className='las la-angle-down' /> : <i className='las la-angle-right' />}
            </div>
            {showContent ? <SortForm /> : null}
        </div>
    )
};

export default Sort;

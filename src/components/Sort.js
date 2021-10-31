import React, { useState } from 'react';
import SortForm from './SortForm';
import '../styles/Sort.css';

const Sort = () => {
    const [showContent, setShowContent] = useState(true);

    return (
        <div className='sort'>
            <div className='sortTitle'>Sort</div>
            {showContent ? <SortForm /> : null}
        </div>
    )
};

export default Sort;

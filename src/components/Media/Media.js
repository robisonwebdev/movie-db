import React, { useState } from 'react';
import FilterPanel from './FilterPanel';
import ResultPanel from './ResultPanel';
import '../../styles/Media/Media.css';

const Media = ({ movies, title }) => {
    const [sortBy, setSortBy] = useState('pop_des');

    return (
        <div className='media'>
            <h2>{title || 'Title'}</h2>
            <div className='results'>
                <FilterPanel setSortBy={setSortBy} />
                <ResultPanel movies={movies} sortBy={sortBy} />
            </div>
        </div>
    )
};

export default Media;

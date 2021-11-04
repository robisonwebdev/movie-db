import React from 'react';
import FilterPanel from './FilterPanel';
import ResultPanel from './ResultPanel';
import '../styles/DisplayPage.css';

const DisplayPage = ({ movies, title }) => {
    return (
        <div className='displayPage'>
            <h2>{title || 'Title'}</h2>
            <div className='results'>
                <FilterPanel />
                <ResultPanel movies={movies} />
            </div>
        </div>
    )
};

export default DisplayPage;

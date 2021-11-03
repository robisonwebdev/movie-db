import React from 'react';
import FilterPanel from './FilterPanel';
import ResultPanel from './ResultPanel';
import '../styles/DisplayPage.css';

const DisplayPage = ({ title }) => {
    return (
        <div className='displayPage'>
            <h2>{title || 'Title'}</h2>
            <div className='results'>
                <FilterPanel />
                <ResultPanel />
            </div>
        </div>
    )
};

export default DisplayPage;

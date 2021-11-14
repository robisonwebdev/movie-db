import React from 'react';
import axios from 'axios';

const MovieStats = ({ languages, stats }) => {
    const { budget, original_language, revenue, status } = stats;

    const getLanguageString = () => {  
        let language = '';

        languages.forEach(obj => {
            if (obj['iso_639_1'] === original_language) {
                language = obj.english_name;
            }
        })

        return language;
    }

    return (
        <div className='movieStats'>
            {}
            <div className='status'>
                <h4>Status</h4>
                {status}
            </div>
            <div className='originalLanguage'>
                <h4>Original Language</h4>
                {getLanguageString()}
            </div>
            <div className='budget'>
                <h4>Budget</h4>
                {`$${budget.toLocaleString('en-US')}`}
            </div>
            <div className='revenue'>
                <h4>Revenue</h4>
                {`$${revenue.toLocaleString('en-US')}`}
            </div>
        </div>
    )
};

export default MovieStats;

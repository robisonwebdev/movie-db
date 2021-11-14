import React from 'react';

const MovieStats = ({ stats }) => {
    const { budget, original_language, revenue, status } = stats;

    return (
        <div className='movieStats'>
            {console.log(stats)}
            <div className='status'>
                <h4>Status</h4>
                {status}
            </div>
            <div className='originalLanguage'>
                <h4>Original Language</h4>
                {original_language}
            </div>
            <div className='budget'>
                <h4>Budget</h4>
                {budget}
            </div>
            <div className='revenue'>
                <h4>Revenue</h4>
                {revenue}
            </div>
        </div>
    )
};

export default MovieStats;

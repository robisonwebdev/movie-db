import React from 'react';

const OverviewTitle = ({ certification, genres, releaseDate, runtime, title }) => {
    return (
        <div className='overviewTitle'>
            <h1>{title}</h1>
            <div className='overviewFacts'>
                <p>{certification}</p>
                <p>{releaseDate}</p>
                <p>{genres}</p>
                <p>{runtime}</p>
            </div>
        </div>
    )
};

export default OverviewTitle;

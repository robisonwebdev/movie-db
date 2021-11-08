import React from 'react';

const OverviewTitle = ({ credits, movie, releaseDate }) => {
    const title = movie.title;
    const certification = releaseDate['release_dates'][0]['certification'];
    const date = new Date(releaseDate['release_dates'][0]['release_date']).getUTCFullYear();
    const genres = movie.genres[0]['name'];
    const runtime = movie.runtime;

    const convertRuntime = () => {
        const runtime = movie.runtime;
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.round((runtimeToHours - hours) * 60);

        return `${hours}h ${minutes}m`
    }

    return (
        <div className='overviewTitle'>
            <h1>{title}</h1>
            <div className='overviewFacts'>
                <p>{certification}</p>
                <p>{date}</p>
                <p>{genres}</p>
               <p>{convertRuntime()}</p>
            </div>
        </div>
    )
};

export default OverviewTitle;

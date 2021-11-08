import React from 'react';

const OverviewTitle = ({ credits, movie, releaseDate }) => {
    const title = movie.title;
    const certification = releaseDate['release_dates'][0]['certification'];
    const date = new Date(releaseDate['release_dates'][0]['release_date']).getUTCFullYear();
    
    const runtime = movie.runtime;

    const convertRuntime = () => {
        const runtime = movie.runtime;
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.round((runtimeToHours - hours) * 60);

        return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }

    const mapGenres = () => {
        const genresList = [];

        movie.genres.map(genre => {
            genresList.push(genre.name);
        });

        return genresList.join(', ');
    }

    return (
        <div className='overviewTitle'>
            {console.log(movie)}
            <h1>{title}</h1>
            <div className='overviewFacts'>
                <p>{certification}</p>
                <p>{date}</p>
                <p>{mapGenres()}</p>
               <p>{convertRuntime()}</p>
            </div>
        </div>
    )
};

export default OverviewTitle;

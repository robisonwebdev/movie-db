import React from 'react';
import '../../styles/movieOverview/OverviewTitle.css';

const OverviewTitle = ({ credits, movie, releaseDate }) => {
    const title = movie.title;
    const certification = releaseDate[0]['release_dates'][0]['certification'];
    const date = new Date(releaseDate[0]['release_dates'][0]['release_date']).getUTCFullYear();

    const convertRuntime = () => {
        const runtime = movie.runtime;
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.round((runtimeToHours - hours) * 60);

        return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }

    const joinGenres = () => {
        const genresList = [];

        movie.genres.forEach(genre => {
            genresList.push(genre.name);
        });

        return genresList.join(', ');
    }

    return (
        <div className='overviewTitle'>
            <h1>{title}</h1>
            <div className='overviewFacts'>
                <p>{certification}</p>
                <p>{date}</p>
                <p>{joinGenres()}</p>
               <p>{convertRuntime()}</p>
            </div>
        </div>
    )
};

export default OverviewTitle;

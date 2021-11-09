import React from 'react';
import '../../styles/movieOverview/OverviewTitle.css';

const OverviewTitle = ({ credits, movie, releaseDate }) => {
    const title = movie.title;
    const certification = releaseDate[0]['release_dates'][0]['certification'];

    const convertRuntime = () => {
        const runtime = movie.runtime;
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.round((runtimeToHours - hours) * 60);

        return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }

    const getDate = (format) => {
        const apiDate = new Date(releaseDate[0]['release_dates'][0]['release_date']);
        const year = apiDate.getUTCFullYear();
        const month = apiDate.getUTCMonth() + 1;
        const day = apiDate.getUTCDate();

        if (format === 'yyyy') return year;

        if (format === 'mm/dd/yyyy') return `${month}/${day}/${year}`;

        return null;
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
            <h2>{`${title} (${getDate('yyyy')})`}</h2>
            <div className='overviewFacts'> 
                <p className='overviewCert'>{certification}</p>
                <p>{getDate('mm/dd/yyyy')}</p>
                <p>{joinGenres()}</p>
               <p>{convertRuntime()}</p>
            </div>
        </div>
    )
};

export default OverviewTitle;

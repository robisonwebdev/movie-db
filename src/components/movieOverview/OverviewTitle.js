import React from 'react';
import '../../styles/movieOverview/OverviewTitle.css';

const OverviewTitle = ({ movie, releaseDate }) => {
    const title = movie.title;

    const convertRuntime = () => {
        const runtime = movie.runtime;
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.round((runtimeToHours - hours) * 60);

        return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    }
    const getAndJoinGenres = () => {
        const genresList = [];

        movie.genres.forEach(genre => {
            genresList.push(genre.name);
        });

        return genresList.join(', ');
    }

    const getCertification = () => {
        const apiPath = releaseDate[0]['release_dates'];
        const findCertification = apiPath.find(({ certification }) => certification !== '');
        const certification = findCertification['certification'];

        return certification;
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

    return (
        <div className='overviewTitle'>            
            <h1>{`${title} (${getDate('yyyy')})`}</h1>
            <div className='overviewFacts'> 
                <p className='overviewCert'>{getCertification()}</p>
                <p>{getDate('mm/dd/yyyy')}</p>
                <p>{getAndJoinGenres()}</p>
               <p>{convertRuntime()}</p>
            </div>
        </div>
    )
};

export default OverviewTitle;

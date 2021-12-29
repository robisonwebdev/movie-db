import React from 'react';
import '../../../styles/Overview/Title.css';

const Title = ({ movie }) => {
    const convertRuntime = () => {
        const runtime = movie.runtime;
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.round((runtimeToHours - hours) * 60);

        return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    };

    const getAndJoinGenres = () => {
        const genresList = [];

        movie.genres.forEach(genre => {
            genresList.push(genre.name);
        });

        return genresList.join(', ');
    };

    const getDate = (format) => {
        const releaseDates = movie['release_dates']['results'];
        const findUSReleaseDates = releaseDates.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
        const findReleaseDate = findUSReleaseDates['release_dates'].find(({ release_date }) => release_date !== '');
        const getDate = new Date(findReleaseDate['release_date']);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth() + 1;
        const day = getDate.getUTCDate();

        if (format === 'yyyy') return year;

        if (format === 'mm/dd/yyyy') return `${month}/${day}/${year} (US)`;

        return null;
    };

    const getRating = () => {
        const releaseDates = movie['release_dates']['results'];
        const findUSReleaseDates = releaseDates.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
        const findCertification = findUSReleaseDates['release_dates'].find(({ certification }) => certification !== '');
        const certification = findCertification['certification'];

        if (findCertification === undefined) return 'NA';

        return certification
    };

    return (
        <div className='overview_title'>            
            <div className='overview_title_bar'>
                <h1>{movie.title}</h1>
                <h1 className='overview_title_date'>{`(${getDate('yyyy')})`}</h1>
            </div>
            <div className='overview_title_facts'> 
                <p className='overview_rating'>{getRating()}</p>
                <p>{getDate('mm/dd/yyyy')}</p>
                <p className='bulletPoint'>•</p>
                <p>{getAndJoinGenres()}</p>
                <p className='bulletPoint'>•</p>
                <p>{convertRuntime()}</p>
            </div>
        </div>
    )
};

export default Title;

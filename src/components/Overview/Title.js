import React from 'react';
import '../../styles/Overview/Title.css';

const OverviewTitle = ({ media, format }) => {
    const title = media.title || media.name;

    // const convertRuntime = () => {
    //     const runtime = movie.runtime;
    //     const runtimeToHours = (runtime / 60);
    //     const hours = Math.floor(runtimeToHours);
    //     const minutes = Math.round((runtimeToHours - hours) * 60);

    //     return hours >=1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    // }
    // const getAndJoinGenres = () => {
    //     const genresList = [];

    //     movie.genres.forEach(genre => {
    //         genresList.push(genre.name);
    //     });

    //     return genresList.join(', ');
    // }

    const getMovieCertification = () => {
        const releaseDates = media['release_dates']['results'];
        const findUSReleaseDates = releaseDates.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
        const findCertification = findUSReleaseDates['release_dates'].find(({ certification }) => certification !== '');
        const certification = findCertification['certification'];

        if (findCertification === undefined) return '404';

        return certification
    }

    const getShowCertification = () => {
        const contentRatings = media.content_ratings.results;
        const findUSRatings = contentRatings.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
        const rating = findUSRatings['rating'];

        if (findUSRatings === undefined) return '404';

        return rating;
    }

    const getDate = (format) => {
        const releaseDates = media['release_dates']['results']; // Need to add shows
        const findUSReleaseDates = releaseDates.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
        const findReleaseDate = findUSReleaseDates['release_dates'].find(({ release_date }) => release_date !== '');
        const getDate = new Date(findReleaseDate['release_date']);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth() + 1;
        const day = getDate.getUTCDate();

        if (format === 'yyyy') return year;

        if (format === 'mm/dd/yyyy') return `${month}/${day}/${year} (US)`;

        return null;
    }

    if (format === 'movie') {
        return (
            <div className='overviewTitle'>            
                <div className='overview_Title'>
                    <h1>{title}</h1>
                    <h1 className='title_Date'>{`(${getDate('yyyy')})`}</h1>
                </div>
                <div className='overviewFacts'> 
                    <p className='overviewCert'>{getMovieCertification()}</p>
                    <p>{getDate('mm/dd/yyyy')}</p>
                    {/* <p className='bulletPoint'>•</p>
                    <p>{getAndJoinGenres()}</p>
                    <p className='bulletPoint'>•</p>
                   <p>{convertRuntime()}</p> */}
                </div>
            </div>
        );
    }

    if (format === 'show') {
        return (
            <div className='overviewTitle'>
                <div className='overview_Title'>
                    <h1>{title}</h1>
                    {/* <h1 className='title_Date'>{`(${getDate('yyyy')})`}</h1> */}
                </div>
            </div>
        );
    }
    
};

export default OverviewTitle;

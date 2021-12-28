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

    const getCertification = () => {
        const releaseDates = media['release_dates']['results'];
        const findUSReleaseDates = releaseDates.find(({ iso_3166_1 }) => iso_3166_1 === 'US');
        const findCertification = findUSReleaseDates['release_dates'].find(({ certification }) => certification !== '');
        const certification = findCertification['certification'];

        if (findCertification === undefined) return '404';

        return certification
    }

    const getDate = (format) => {
        // const apiDate = new Date(media.release_date[0]['release_dates'][0]['release_date']);
        const apiDate = new Date(media.release_date || media.first_air_date);
        const year = apiDate.getUTCFullYear();
        const month = apiDate.getUTCMonth() + 1;
        const day = apiDate.getUTCDate();

        if (format === 'yyyy') return year;

        if (format === 'mm/dd/yyyy') return `${month}/${day}/${year}`;

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
                    <p className='overviewCert'>{getCertification()}</p>
                    {/* <p>{getDate('mm/dd/yyyy')}</p>
                    <p className='bulletPoint'>•</p>
                    <p>{getAndJoinGenres()}</p>
                    <p className='bulletPoint'>•</p>
                   <p>{convertRuntime()}</p> */}
                </div>
            </div>
        );
    }
    
};

export default OverviewTitle;

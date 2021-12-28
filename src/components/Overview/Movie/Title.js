import React from 'react';
import '../../../styles/Overview/Title.css';

const Title = ({ movie }) => {
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
    
    return (
        <div className='overview_title'>            
            <div className='overview_title_bar'>
                <h1>{movie.title}</h1>
                <h1 className='title_date'>{`(${getDate('yyyy')})`}</h1>
            </div>
            <div className='overview_title_facts'> 
                {/* <p className='overviewCert'>{getMovieCertification()}</p> */}
                {/* <p>{getMovieDate('mm/dd/yyyy')}</p> */}
                {/* <p className='bulletPoint'>•</p> */}
                {/* <p>{getAndJoinGenres()}</p> */}
                {/* <p className='bulletPoint'>•</p> */}
                {/* <p>{convertRuntime()}</p> */}
            </div>
        </div>
    )
};

export default Title;

import React from 'react';
import '../../../styles/Overview/Title.css'

const Title = ({ show }) => {
    const convertRuntime = () => {
        const runtime = show.episode_run_time[0];
        const runtimeToHours = (runtime / 60);
        const hours = Math.floor(runtimeToHours);
        const minutes = Math.round((runtimeToHours - hours) * 60);

        return hours >= 1 ? `${hours}h ${minutes}m` : `${minutes}m`;
    };

    const getAndJoinGenres = () => {
        const genresList = [];

        show.genres.forEach(genre => {
            genresList.push(genre.name);
        });

        return genresList.join(', ');
    };

    const getRating = () => {
        const contentRatings = show['content_ratings']['results'];
        const findUSRating = contentRatings.find(({ iso_3166_1 }) => iso_3166_1 === 'US');

        if (findUSRating === undefined) return 'NA';

        return findUSRating['rating'];
    };

    const getYear = () => {
        const date = new Date(show.first_air_date);
        const showYear = date.getUTCFullYear();

        return showYear;
    };

    return (
        <div className='overview_title'>
            <div className='overview_title_bar'>
                <h1>{show.name}</h1>
                <h1 className='overview_title_date'>{`(${getYear()})`}</h1>
            </div>
            <div className='overview_title_facts'> 
                <p className='overview_title_rating'>{getRating()}</p>
                <p>{getAndJoinGenres()}</p>
                <p className='bulletPoint'>•</p>
                <p>{convertRuntime()}</p>
            </div>
        </div>
    )
};

export default Title;

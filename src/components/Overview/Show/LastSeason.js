import React from 'react';
import '../../../styles/Overview/Show/LastSeason.css';

const LastSeason = ({ seasons }) => {
    const seasonsWithAirDates = seasons.filter(season => season.air_date !== null);
    const lastSeason = seasonsWithAirDates.pop();

    const getEpisodes = () => {
        if (lastSeason.episode_count === null) {
            return 'No Episodes';
        };

        return `${lastSeason.episode_count} Episodes`;
    };

    const getImage = () => {
        const imagePath = `https://image.tmdb.org/t/p/w130_and_h195_bestv2/${lastSeason.poster_path}`;

        if (lastSeason.poster_path === null) {
            const noImage = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;

            return <img src={noImage} alt={lastSeason.name} />
        }

        return <img src={imagePath} alt={lastSeason.name}/>
    };

    const getYear = () => {
        const airDate = lastSeason.air_date;
        const date = new Date(airDate);
        const year = date.getUTCFullYear();

        return year;
    };

    return (
        <section className='overview_lastSeason'>
            <h3>Last Season</h3>
            <div className='last_season_card'>
                {getImage()}
                <div className='card_content'>
                    <div className='card_title'>
                        <h3>{lastSeason.name}</h3>
                        <strong>{`${getYear()} | ${getEpisodes()}`}</strong>
                    </div>
                    <p>{lastSeason.overview}</p>
                </div>
            </div>
            <h4>View All Seasons</h4>
        </section>
    )
};

export default LastSeason;

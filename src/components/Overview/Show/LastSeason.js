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
            const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

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
        <section className='overview_lastSeason borderBottom'>
            <h2>Last Season</h2>
            <div className='last_season_card'>
                {getImage()}
                <div className='card_content'>
                    <div className='card_title'>
                        <h2>{lastSeason.name}</h2>
                        <strong>{`${getYear()} | ${getEpisodes()}`}</strong>
                    </div>
                    {lastSeason.overview === '' ? null : <p>{lastSeason.overview}</p>}
                </div>
            </div>
            <h3>View All Seasons</h3>
        </section>
    )
};

export default LastSeason;

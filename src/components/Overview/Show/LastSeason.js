import React from 'react';

const LastSeason = ({ seasons }) => {
    const seasonsWithAirDates = seasons.filter(season => season.air_date !== null);
    const lastSeason = seasonsWithAirDates.pop();

    return (
        <section className='overview_lastSeason'>
            <h3>Last Season</h3>
            <div className='last_season'>
                
            </div>
            <h4>View All Seasons</h4>
        </section>
    )
};

export default LastSeason;

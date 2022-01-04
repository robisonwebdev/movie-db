import React from 'react';
import Facts from './Facts';
import '../../../styles/Overview/Stats.css';

const Stats = ({ movie }) => {
    return (
        <div className='overview_stats'>
            <Facts movie={movie} />
        </div>
    )
};

export default Stats;

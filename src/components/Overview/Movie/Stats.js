import React from 'react';
import Facts from './Facts';
import Keywords from './Keywords';
import '../../../styles/Overview/Stats.css';

const Stats = ({ movie }) => {
    return (
        <div className='overview_stats'>
            <Facts movie={movie} />
            <Keywords keywords={movie.keywords.keywords} />
        </div>
    )
};

export default Stats;

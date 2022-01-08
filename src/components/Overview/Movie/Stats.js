import React from 'react';
import Facts from './Facts';
import Keywords from './Keywords';
import '../../../styles/Overview/Stats.css';

const Stats = ({ movie }) => {
    return (
        <section className='overview_stats borderBottom'>
            <Facts movie={movie} />
            <Keywords keywords={movie.keywords.keywords} />
        </section>
    )
};

export default Stats;

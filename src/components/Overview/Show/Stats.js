import React from 'react';
import Facts from './Facts';
import Keywords from './Keywords';

const Stats = ({ show }) => {
    return (
        <section className='overview_stats borderBottom'>
            <Facts show={show} />
            <Keywords keywords={show.keywords.results} />
        </section>
    )
};

export default Stats;

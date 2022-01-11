import React from 'react';
import CastCard from './CastCard';
import '../../../styles/Overview/CastAndCrew.css';

const TopCast = ({ cast }) => {
    const topCast = cast.slice(0, 9);

    const topNine = topCast.map(person => {
        return <CastCard key={person.id} person={person} />
    })

    return (
        <section className='overview_topCast borderBottom'>
            <h2>Top Billed Cast</h2>
            <div className='topCast'>
                {topNine}
                <h4 className='viewMore'>View More <i className='las la-arrow-right' /></h4>
            </div>
            <h3>{`Full Cast & Crew`}</h3>
        </section>
    )
};

export default TopCast;

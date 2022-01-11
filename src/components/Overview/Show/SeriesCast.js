import React from 'react';
import CastCard from './CastCard';
import '../../../styles/Overview/CastAndCrew.css';

const SeriesCast = ({ cast }) => {
    const topCast = cast.slice(0, 9);

    const topNine = topCast.map(person => {
        return <CastCard key={person.id} person={person} />
    });

    return (
        <section className='overview_seriesCast borderBottom'>
            <h2>Series Cast</h2>
            <div className='seriesCast'>
                {topNine}
                <h4 className='viewMore'>View More <i className='las la-arrow-right' /></h4>
            </div>
            <h3>{`Full Cast & Crew`}</h3>
        </section>
    )
};

export default SeriesCast;

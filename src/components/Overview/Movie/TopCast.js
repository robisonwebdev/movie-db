import React from 'react';
import CastCard from './CastCard';
import '../../../styles/Overview/TopBilledCast.css';

const TopCast = ({ cast }) => {
    const topCast = cast.slice(0, 9);

    const topNine = topCast.map(person => {
        return <CastCard key={person.id} person={person} />
    })

    return (
        <div className='overview_topCast'>
            <h3>Top Billed Cast</h3>
            <div className='topCast'>
                {topNine}
                <h4 className='viewMore'>View More <i className='las la-arrow-right' /></h4>
            </div>
        </div>
    )
};

export default TopCast;

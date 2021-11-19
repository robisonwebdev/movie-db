import React, { useState } from 'react';
import CastCard from './CastCard';
import '../../styles/Movies/TopBilledCast.css';

const TopBilledCast = ({ cast }) => {
    const [topCast] = useState(cast.slice(0, 9));
    
    const topNineCast = topCast.map(person => <CastCard key={person.id} person={person} />);

    return (
        <div className='topBilledCast'>
            <h3>Top Billed Cast</h3>
            <div className='topCast'>
                {topNineCast}
                <h4 className='viewMore'>View More <i className='las la-arrow-right' /></h4>
            </div>
        </div>
    )
};

export default TopBilledCast;

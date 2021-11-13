import React, { useState } from 'react';
import CastCard from './CastCard';
import '../../styles/movieOverview/TopBilledCast.css';

const TopBilledCast = ({ cast }) => {
    const [topCast] = useState(cast.slice(0, 9));
    
    const topNineCast = topCast.map(person => <CastCard key={person.id} person={person} />);

    return (
        <div className='topBilledCast'>
            {topNineCast}
        </div>
    )
};

export default TopBilledCast;

import React, { useState } from 'react';

const Crew = ({ credits }) => {
    const [crew] = useState(credits.crew);

    return (
        <div className='overview_crew'>
            
        </div>
    )
};

export default Crew;

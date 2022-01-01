import React from 'react';
import '../../../styles/Overview/Crew.css';

const Creators = ({ show }) => {
    const creators = show.created_by?.map(creator => {
        return (
            <div className='creator' key={creator.id}>
                <h4>{creator.name}</h4>
                <p>Creator</p>
            </div>
        );
    })

    return (
        <div className='overview_creators'>
            {creators}
        </div>
    )
};

export default Creators;

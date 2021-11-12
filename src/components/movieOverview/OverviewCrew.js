import React, { useEffect, useState } from 'react';
import '../../styles/movieOverview/OverviewCrew.css';

const OverviewCrew = ({ credits }) => {
    const [crew] = useState(credits.crew);
    const [director, setDirector] = useState('');
    const [producer, setProducer] = useState('');
    const [screenplay, setScreenplay] = useState('');

    useEffect(() => {
        crew.find(member => {
            // Get Director
            if (member.job === 'Director') {
                setDirector(member.name);
            }

            // Get Screenplay
            if (member.job === 'Screenplay') {
                setScreenplay(member.name);
            }

            // Get Producer
            if (member.job === 'Producer') {
                setProducer(member.name);
            }

            return null;
        });
    }, [crew]);

    return (
        <div className='overviewCrew'>
            <Crew job={'Director'} name={director} />            
            <Crew job={'Producer'} name={producer} />            
            <Crew job={'Screenplay'} name={screenplay} />            
        </div>
    )
};

export default OverviewCrew;

const Crew = ({ job, name }) => {
    return (
        <div className='crew'>
            <h4>{name}</h4>
            <p>{job}</p>
        </div>
    );
}
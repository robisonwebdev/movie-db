import React, { useEffect, useState } from 'react';

const Crew = ({ credits }) => {
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
        <section className='overview_crew'>
            <CrewInfo job={'Director'} name={director} />            
            <CrewInfo job={'Producer'} name={producer} />            
            <CrewInfo job={'Screenplay'} name={screenplay} />
        </section>
    )
};

const CrewInfo = ({ job, name }) => {
    return (
        <div className='crew'>
            <h4>{name}</h4>
            <p>{job}</p>
        </div>
    );
}

export default Crew;

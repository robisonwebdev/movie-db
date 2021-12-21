import React from 'react';
import MediaCard from './MediaCard';
import PeopleCard from './PeopleCard';

const Results = ({ media, type }) => {
    // Media Type movie, shows, or collection
    if (type === 'movie' || type==='shows' || type==='collection') {
        const mapMedia = media.results?.map(item => {
            return <MediaCard key={item.id} media={item} type={type} />
        });

        return (
            <div className='results'>
                {mapMedia}
            </div>
        );
    }

    if (type === 'people') {
        const mapPeople = media.results?.map(person => {
            return <PeopleCard key={person.id} person={person} />
        });

        return (
            <div className='results'>
                {mapPeople}
            </div>
        );
    }

    return (
        <div className='results'>
            <p>ERROR</p>
        </div>
    )
};

export default Results;

import React from 'react';
import MediaCard from './MediaCard';

const MediaList = ({ data, format }) => {
    const movieList = data.results?.map(obj => {
        return <MediaCard key={obj.id} media={obj} format='movie' />
    });


    const tvList = data.results?.map(obj => {
        return <MediaCard key={obj.id} media={obj} format='show' />
    });

    return (
        <section className='company_main'>
            {format === 'movie' ? movieList : tvList}
        </section>
    );
};

export default MediaList;

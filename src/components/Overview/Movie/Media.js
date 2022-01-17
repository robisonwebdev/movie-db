import React from 'react';

const Media = ({ movie }) => {
    const { backdrops, posters } = movie.images;
    const videos = movie.videos.results;

    return (
        <section className='overview_media borderBottom'>
            <div className='media_header'></div>
            <div className='media_content'></div>
        </section>
    )
};

export default Media;

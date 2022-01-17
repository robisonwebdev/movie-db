import React from 'react';

const Media = ({ movie }) => {
    const { backdrops, posters } = movie.images;
    const videos = movie.videos.results;

    return (
        <section className='overview_media borderBottom'>
            <div className='media_header'>
                <h2>Media</h2>
                <div className='media_nav'>
                    <strong>Most Popular</strong>
                    <strong>Videos {videos.length}</strong>
                    <strong>Backdrops {backdrops.length}</strong>
                    <strong>Posters {posters.length}</strong>
                </div>
            </div>
            <div className='media_content'></div>
        </section>
    )
};

export default Media;

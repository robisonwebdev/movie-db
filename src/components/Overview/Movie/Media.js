import React from 'react';
import '../../../styles/Overview/Media.css';

const Media = ({ movie }) => {
    const { backdrops, posters } = movie.images;
    const videos = movie.videos.results;

    const getBackdrops = () => {
        const firstSixBackdrops = backdrops.slice(0, 6);

        const displayBackdrops = firstSixBackdrops.map(backdrop => {
            const backdropPath = `https://image.tmdb.org/t/p/w533_and_h300_bestv2${backdrop.file_path}`;

            return (
                <div key={backdrop.file_path} className='media_backdrop'>
                    <img src={backdropPath} />
                </div>
            );
        });

        return displayBackdrops;
    };

    const getPosters = () => {
        const firstSixPosters = posters.slice(0, 6);

        const displayPosters = firstSixPosters.map(poster => {
            const posterPath = `https://image.tmdb.org/t/p/w220_and_h330_face${poster.file_path}`;

            return (
                <div key={poster.file_path} className='media_poster'>
                    <img src={posterPath} />
                </div>
            );
        });

        return displayPosters;
    };

    return (
        <section className='overview_media borderBottom'>
            <div className='media_header'>
                <h2>Media</h2>
                <div className='media_nav'>
                    <h4>Most Popular</h4>
                    <h4>Videos <span>{videos.length}</span></h4>
                    <h4>Backdrops <span>{backdrops.length}</span></h4>
                    <h4>Posters <span>{posters.length}</span></h4>
                </div>
            </div>
            <div className='media_main'>
                {getBackdrops()}
            </div>
        </section>
    )
};

export default Media;

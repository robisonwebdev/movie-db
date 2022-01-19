import React, { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import '../../../styles/Overview/Media.css';

const Media = ({ movie }) => {
    const [mediaContent, setMediaContent] = useState();
    const [viewAll, setViewAll] = useState('Videos');    
    const { backdrops, posters } = movie.images;
    const videos = movie.videos.results;

    const getBackdrops = useCallback(() => {
        const firstSixBackdrops = backdrops.slice(0, 6);

        const displayBackdrops = firstSixBackdrops.map(backdrop => {
            const backdropPath = `https://image.tmdb.org/t/p/w533_and_h300_bestv2${backdrop.file_path}`;

            return (
                <div key={backdrop.file_path} className='media_backdrop'>
                    <img src={backdropPath} alt={movie.title} />
                </div>
            );
        });

        return (
            <>
                {displayBackdrops}
                {backdrops.length > 6 ? <h4 className='viewMore'>View More <i className='las la-arrow-right' /></h4> : null}
            </>
        );
    }, [backdrops, movie.title]);

    const getPosters = useCallback(() => {
        const firstSixPosters = posters.slice(0, 6);

        const displayPosters = firstSixPosters.map(poster => {
            const posterPath = `https://image.tmdb.org/t/p/w220_and_h330_face${poster.file_path}`;

            return (
                <div key={poster.file_path} className='media_poster'>
                    <img src={posterPath} alt={movie.title} />
                </div>
            );
        });

        return (
            <>
                {displayPosters}
                {posters.length > 6 ? <h4 className='viewMore'>View More <i className='las la-arrow-right' /></h4> : null}
            </>
        );
    }, [posters, movie.title]);

    const getVideos = useCallback(() => {
        const fristSixVideos = videos.slice(0, 6);

        const displayVideos = fristSixVideos.map(video => {
            return (
                <div key={video.key} className='media_video'>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} light={true} controls={true} height='300px' width='533px' />
                </div>
            );
        });

        return displayVideos;

    }, [videos]);

    useEffect(() => {
        setMediaContent(getVideos());
    }, [getVideos]);

    return (
        <section className='overview_media borderBottom'>
            <div className='media_header'>
                <h2>Media</h2>
                <div className='media_nav'>
                    <h4 onClick={() => {setMediaContent(getVideos()); setViewAll('Videos')}}>Videos <span>{videos.length}</span></h4>
                    <h4 onClick={() => {setMediaContent(getBackdrops()); setViewAll('Backdrops')}}>Backdrops <span>{backdrops.length}</span></h4>
                    <h4 onClick={() => {setMediaContent(getPosters()); setViewAll('Posters')}}>Posters <span>{posters.length}</span></h4>
                </div>
                <p className='media_view_all'>View All {viewAll}</p>
            </div>
            <div className='media_main'>
                {mediaContent}
            </div>
        </section>
    )
};

export default Media;

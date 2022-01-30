import React from 'react';

const MediaCard = ({ format, media }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const getMovieDate = () => {
        const releaseDate = media.release_date;
        const getDate = new Date(releaseDate);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth();
        const day = getDate.getUTCDate();

        console.log('running movie Date')
        return `${months[month]} ${day}, ${year}`;
    };

    const getTVDate = () => {
        const firstAirDate = media.first_air_date;
        const getDate = new Date(firstAirDate);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth();
        const day = getDate.getUTCDate();

        return `${months[month]} ${day}, ${year}`;
    }

    const getPoster = () => {
        const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

        if (media.poster_path === null) {
            return <img className='company_media_image noImage' src={noImage} alt={media.title || media.name} />;
        };

        return <img className='company_media_image' src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${media.poster_path}`} alt={media.name || media.title} />
    };

    return (
        <section className='company_media_card'>
            {getPoster()}
            <div className='media_card_details'>
                <div className='media_card_title'>
                    <h2>{media.title || media.name}</h2>
                    {format === 'movie' ? getMovieDate() : getTVDate()}
                </div>                
                <p>{media.overview}</p>
            </div>
        </section>
    );
};

export default MediaCard;

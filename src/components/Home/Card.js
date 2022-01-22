import React from 'react';
import { Link } from 'react-router-dom';
import ShowDate from './ShowDate';
import '../../styles/Home/Card.css';

const Card = ({ media }) => {
    const airDate = media.first_air_date;
    const name = media.name
    const title = media.title;
    const releaseDate = media.release_date;

    const getLinkPath = () => {
        if (media.release_date) {
            return `movie/${media.id}`;
        };

        return `tv/${media.id}`;
    }

    const getPoster = () => {
        const noImage = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';        

        if (media.poster_path === null) {
            return <Link to={getLinkPath()}><img src={noImage} alt={media.name || media.title} /></Link>
        };

        return <Link to={getLinkPath()}><img src={`https://image.tmdb.org/t/p/w220_and_h330_face${media.poster_path}`} alt={media.name || media.title} /></Link>
    };

    return (
        <section className='home_media_card'>
            {getPoster()}
            <div className='card_content'>
                <Link to={getLinkPath()}><h2>{name || title}</h2></Link>
                <ShowDate value={airDate || releaseDate} />
            </div>
        </section>
    );
};

export default Card;

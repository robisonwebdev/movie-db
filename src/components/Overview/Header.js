import React from 'react';
import Poster from './Poster';
import Crew from './Crew';
import Description from './Description';
import Title from './Title';
import '../../styles/Overview/OverviewHeader.css';

const OverviewHeader = ({ credits, movie, releaseDate }) => {
    const backdropImage = `http://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const backdropStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${backdropImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div className='overviewHeader'  style={backdropStyle}>
            <div className='overviewHeaderContent'>
                <Poster movie={movie} />
                <div className='overviewHeaderInfo'>
                    <Title
                        movie={movie}
                        releaseDate={releaseDate}
                    />
                    <Description
                        description={movie.overview}
                        tagline={movie.tagline}
                    />
                    <Crew
                        credits={credits}
                    />
                </div>
            </div>
        </div>
    )
};

export default OverviewHeader;

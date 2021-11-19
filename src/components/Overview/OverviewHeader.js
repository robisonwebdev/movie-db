import React from 'react';
import OverviewPoster from './OverviewPoster';
import OverviewCrew from './OverviewCrew';
import OverviewDescription from './OverviewDescription';
import OverviewTitle from './OverviewTitle';
import '../../styles/Movies/OverviewHeader.css';

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
                <OverviewPoster movie={movie} />
                <div className='overviewHeaderInfo'>
                    <OverviewTitle
                        movie={movie}
                        releaseDate={releaseDate}
                    />
                    <OverviewDescription
                        description={movie.overview}
                        tagline={movie.tagline}
                    />
                    <OverviewCrew
                        credits={credits}
                    />
                </div>
            </div>
        </div>
    )
};

export default OverviewHeader;

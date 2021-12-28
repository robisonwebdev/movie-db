import React from 'react';
import Poster from '../Poster';
import Title from './Title';
import '../../../styles/Overview/Header.css';

const Header = ({ movie }) => {  
    const backdropImage = `http://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const backdropStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${backdropImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div className='overview_header' style={backdropStyle}>
            <div className='overview_header_content'>
                <Poster media={movie} />
                <div className='overview_header_info'>
                    <Title movie={movie} />
                    {/* <Description
                        description={movie.overview}
                        tagline={movie.tagline}
                    /> */}
                    {/* <Crew
                        credits={credits}
                    /> */}
                </div>
            </div>
        </div>
    )
};

export default Header;

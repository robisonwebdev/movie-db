import React from 'react';
import Description from './Description';
import Poster from '../Poster';
import Title from './Title';
import '../../../styles/Overview/Header.css';

const Header = ({ collection }) => {
    const backdropImage = `http://image.tmdb.org/t/p/original/${collection.backdrop_path}`;
    const backdropStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${backdropImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div className='overview_header' style={backdropStyle}>
            <div className='overview_header_content'>
                <Poster media={collection} />
                <div className='overview_header_info'>
                    <Title collection={collection} />
                    <Description collection={collection} />
                </div>
            </div>
        </div>
    )
};

export default Header;

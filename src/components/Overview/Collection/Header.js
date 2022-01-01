import React from 'react';
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
            
        </div>
    )
};

export default Header;

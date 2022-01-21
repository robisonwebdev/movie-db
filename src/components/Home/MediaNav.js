import React from 'react';
import '../../styles/Home/MediaNav.css';

const MediaNav = ({ handleNav, items, title }) => {
    const buildNav = items.map(item => {
        return <li onClick={() => handleNav(item)} key={item}>{item}</li>
    });


    return (
        <div className='home_media_header'>
            <h2>{title}</h2>
            <nav className='home_media_nav'>
                <ul>
                    {buildNav}
                </ul>
            </nav>
        </div>        
    );
};

export default MediaNav;

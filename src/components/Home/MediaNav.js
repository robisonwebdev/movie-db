import React from 'react';

const MediaNav = ({ items }) => {
    const buildNav = items.map(item => {
        return <li key={item}>{item}</li>
    });


    return (
        <nav className='home_media_nav'>
            <ul>
                {buildNav}
            </ul>
        </nav>
    );
};

export default MediaNav;

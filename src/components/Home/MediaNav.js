import React, { useState } from 'react';
import '../../styles/Home/MediaNav.css';

const MediaNav = ({ handleNav, items, title }) => {
    const [active, setActive] = useState(items[0]);

    const buildNav = items.map(item => {
        return (
            <li
                className={active === item ? 'activeTab' : null}
                key={item}
                onClick={() => {handleNav(item); setActive(item)}}
            >
                {item}
            </li>
        );
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

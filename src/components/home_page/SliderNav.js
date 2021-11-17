import React from 'react';
import '../../styles/home_page/SliderNav.css';

const SliderNav = ({ onClick, selectors }) => {
    const buildNav = selectors.map(selector => {
        return <li key={selector} onClick={() => onClick(selector)}>{selector}</li>;
    });

    return (
        <nav className='sliderNav'>
            <ul>
                {buildNav}
            </ul>
        </nav>
    )
};

export default SliderNav;

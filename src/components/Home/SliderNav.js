import React from 'react';
import '../../styles/Home/SliderNav.css';

const SliderNav = ({ onClick, selectors }) => {
    const buildNav = selectors.map(selector => {
        return <li key={selector} onClick={() => onClick(selector)}>{selector}</li>;
    });

    return (
        <div className='sliderNav'>
            <ul>
                {buildNav}
            </ul>
        </div>
    )
};

export default SliderNav;

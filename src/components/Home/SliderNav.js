import React, { useState } from 'react';
import '../../styles/Home/SliderNav.css';

const SliderNav = ({ onClick, selectors }) => {
    const [active, setActive] = useState(selectors[0]);


    const buildNav = selectors.map(selector => {
        return (
            <li
                className={active === selector ? 'activeTab' : null}
                key={selector}
                onClick={() => {onClick(selector); setActive(selector)}}
            >
                {selector}
            </li>
        );
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

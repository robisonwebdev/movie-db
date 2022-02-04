import React, { useState } from 'react';
import '../../../styles/Overview/Navigation/Dropdown.css';

const Dropdown = ({ onClick, items, title }) => {
    const [show, setShow] = useState(false);

    const buildMenu = items.map(item => {
        return (<button className='overview_dropdown_item' onClick={() => onClick(item)}>{item}</button>);
    })

    return (
        <div className='overview_dropdown' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <div className='overview_dropdown_title' >
                {title} <i className='las la-sort-down' />
            </div>
            {show
                ? <ul className='overview_dropdown_menu'>{buildMenu}</ul>
                : null
            }
        </div>
    );
};

export default Dropdown;

import React, { useState } from 'react';

const Dropdown = ({ items, title }) => {
    const [show, setShow] = useState(false);

    const buildMenu = items.map(item => {
        return (<button className='overview_dropdown_item'>{item}</button>);
    })

    return (
        <div className='overview_dropdown'>
            <div className='overview_dropdown_title' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
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

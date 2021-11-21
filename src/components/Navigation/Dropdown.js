import React, { useState } from "react";

const Dropdown = ({ items, title }) => {
    const [show, setShow] = useState(false);

    const buildButtons = items.map(item => {
        return <DropdownItem key={`${title}_${item}`} item={item} />
    });

    return (
        <div className='dropdown' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <div className='dropdown-title'>{title}</div>
            {show
                ? <div className='dropdown-menu'>{buildButtons}</div>
                : null
            }            
        </div>
    );
};

const DropdownItem = ({ item }) => {
    return (
        <button className='dropdown-item'>{item}</button>
    );
};

export default Dropdown;
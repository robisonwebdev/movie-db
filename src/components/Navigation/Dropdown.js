import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Navigation/Dropdown.css';

const Dropdown = ({ items, title }) => {
    const [show, setShow] = useState(false);

    const buildButtons = items.map(item => {
        const item_link_path = item.replace(/\s/g, "_").toLowerCase();
        const title_link_path = title.replace(/\s/g, "_").toLowerCase();

        return <Link to={`${title_link_path}/${item_link_path}`} key={`${title}_${item}`}><DropdownItem item={item} /></Link>
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
import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import '../../styles/Navigation/Dropdown.css';

const Dropdown = ({ items, path, title }) => {
    const [show, setShow] = useState(false);

    const buildButtons = items.map(item => {
        return <DropdownItem item={item} path={path} title={title}  />
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

export default Dropdown;
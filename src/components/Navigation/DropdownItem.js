import React from 'react';
import { Link } from "react-router-dom";

const DropdownItem = ({ item, path, title }) => {
    const childPath = item.replace(/\s/g, "_").toLowerCase();

    return (
        <Link className='dropdown-link' to={`/${path}/${childPath}`} key={`${title}_${item}`}>
            <button className='dropdown-item'>{item}</button>
        </Link>
    );
};

export default DropdownItem;

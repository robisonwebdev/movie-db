import React from 'react';
import NavLink from './NavLink';

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink linkName='Movies' />
                <NavLink linkName='TV Shows' />
            </ul>
        </nav>
    )
}

export default Nav;

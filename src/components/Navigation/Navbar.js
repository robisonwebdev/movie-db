import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import '../styles/Navbar.css';

const Nav = () => {
    return (
        <nav>
            <Logo />
            <ul>
                <NavLink linkName='Movies' />
                <NavLink linkName='TV Shows' />
            </ul>
        </nav>
    )
}

export default Nav;

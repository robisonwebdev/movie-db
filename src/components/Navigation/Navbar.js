import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Logo from './Logo';
import '../../styles/Navigation/Navbar.css';

const Nav = () => {
    return (
        <nav>
            <Link to='/'><Logo /></Link>
            <ul>
                <Link to='/movies'><NavLink linkName='Movies' /></Link>
                <Link to='/shows'><NavLink linkName='TV Shows' /></Link>                
            </ul>
        </nav>
    )
}

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Dropdown from './Dropdown';
import '../../styles/Navigation/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><Logo /></Link>
            <div className='navMenus'>
                <Dropdown items={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']} path='movies' title={'Movies'} />
                <Dropdown items={['Popular', 'Airing Today', 'On TV', 'Top Rated']} path='shows' title={'TV Shows'} />
                <Dropdown items={['Popular People']} path='people' title={'People'} />
            </div>
        </nav>
    )
};



export default Navbar;
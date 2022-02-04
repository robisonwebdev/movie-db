import React from 'react';
import Dropdown from './Dropdown';
import '../../../styles/Overview/Navigation/Navigation.css';

const Navigation = ({ handleNavChange }) => {
    return (
        <section className='overview_navigation'>
            <ul className='navigation_company'>
                <Dropdown items={['Main', 'Changes']} onClick={handleNavChange} title='Overview' />
                <Dropdown items={['Movies', 'TV Shows']} onClick={handleNavChange} title='Movies' />
                <Dropdown items={['Popularity', 'Rating', 'Release Date']} onClick={handleNavChange} title='Sort' />
            </ul>
        </section>
    );
};

export default Navigation;

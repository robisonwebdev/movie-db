import React from 'react';
import Dropdown from './Dropdown';
import '../../../styles/Overview/Navigation/Navigation.css';

const Navigation = () => {
    return (
        <section className='overview_navigation'>
            <ul className='navigation_company'>
                <Dropdown items={['Main', 'Changes']} title='Overview' />
                <Dropdown items={['Movies', 'TV Shows']} title='Movies' />
                <Dropdown items={['Popularity', 'Rating', 'Release Date']} title='Sort' />
            </ul>
        </section>
    );
};

export default Navigation;

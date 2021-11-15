import React from 'react';
import Welcome from './Welcome';
import Discover from './Discover';
import '../../styles/home_page/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Welcome />
            <Discover
                className='whatsPopular'
                selectors={['On TV', 'For Rent', 'In Theaters']}
                title="What's Popular"
            />
        </div>
    )
};

export default Home;

import React from 'react';
import FreeToWatch from './FreeToWatch/FreeToWatch';
import Trending from './Trending/Trending';
import Welcome from './Welcome/Welcome';
import WhatsPopular from './WhatsPopular/WhatsPopular';
import '../../styles/Home/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Welcome />
            <WhatsPopular />
            <FreeToWatch />
            <Trending />
        </div>
    );
};

export default Home;
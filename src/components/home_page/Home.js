import React from 'react';
import Welcome from './Welcome';
import Discover from './Discover';

const Home = () => {
    return (
        <div className='home'>
            <Welcome />
            <Discover className='whatsPopular' title="What's Popular" />
        </div>
    )
};

export default Home;

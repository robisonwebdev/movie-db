import React from 'react';
import Search from './Search';
import '../../styles/Home/Welcome.css';

const Welcome = () => {
    return (
        <div className='welcome'>
            <div>
                <h1>Welcome.</h1>
                <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
            </div>
            <Search />
        </div>
    )
};

export default Welcome;

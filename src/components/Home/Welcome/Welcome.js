import React, { useEffect, useState } from 'react';
import Search from './Search';
import '../../../styles/Home/Welcome.css';

const Welcome = () => {
    const [image, setImage] = useState({});

    useEffect(() => {
        const imageURLs = [
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/rCxdJkk5PMCWIzRWcpqIxUaWnf1.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/jXDz3w8blsaPvw2OUA0i8zPIvHg.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ayUMWKe6Wow5ixLlKxxlp7IqTiI.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/hreiLoPysWG79TsyQgMzFKaOTF5.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg',
            'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/bcT8CaBIj086WVD7K529h78eujb.jpg'
        ];

        setImage({
            backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%), url('${imageURLs[Math.floor(Math.random() * imageURLs.length)]}')`
        });
    }, []);

    return (
        <section className='welcome' style={image}>
            <div>
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <Search />
        </section>
    )
};

export default Welcome;

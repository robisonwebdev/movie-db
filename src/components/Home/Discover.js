import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import SliderNav from './SliderNav';
import Card from './Card';
import '../../styles/Home/Discover.css';

const Discover = ({ format, handleSelectors, media, selectors, title }) => {
    const buildCards = media.map(item => {
        if (format === 'movie') {
            return <Link key={item.id} to={`movie/${item.id}`}><Card media={item} /></Link>
        }
        
       return <Link key={item.id} to={`tv/${item.id}`}><Card media={item} /></Link>
    })

    return (
        <section className='discover'>
            <div className='discover_container'>
                <div className={'discover_header'}>
                    <h2>{title}</h2>
                    <SliderNav onClick={handleSelectors} selectors={selectors}  />
                </div>
                <div className={'discover_content'}>
                    {buildCards}
                </div>
            </div>
        </section>
    )
};

export default Discover;



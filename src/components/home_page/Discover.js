import React from 'react';
import SliderNav from './SliderNav';
import '../../styles/home_page/Discover.css';

const Discover = ({ className, selectors, title }) => {
    return (
        <section className='discover'>
            <div className={className}>
                <div className={'discover_header'}>
                    <h2>{title}</h2>
                    <SliderNav selectors={selectors}  />
                </div>
                <div className={'discover_content'}>
                    {/* Cards */}
                </div>
            </div>
        </section>
    )
};

export default Discover;

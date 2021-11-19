import React from 'react';
import SliderNav from './SliderNav';
import Card from './Card';
import '../../styles/home_page/Discover.css';

const Discover = ({ handleSelectors, items, selectors, title }) => {
    const buildCards = items.results.map(item => {
        return <Card key={item.id} media={item} />
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

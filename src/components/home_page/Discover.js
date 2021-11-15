import React from 'react';

const Discover = ({ className, title }) => {
    return (
        <section className='discover'>
            <div className={className}>
                <div className={'discover_header'}>
                    <h2>{title}</h2>
                    {/* nav slider */}
                </div>
                <div className={'discover_content'}>
                    {/* Cards */}
                </div>
            </div>
        </section>
    )
};

export default Discover;

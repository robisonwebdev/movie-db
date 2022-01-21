import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const DisplayMedia = ({ media }) => {
    const buildCards = media?.map(item => {
        if (item.release_date) {
            return <Link key={item.id} to={`movie/${item.id}`}><Card media={item} /></Link>
        };
        
       return <Link key={item.id} to={`tv/${item.id}`}><Card media={item} /></Link>;
    });

    return (
        <div className='home_media_content'>
            {buildCards}
        </div>
    );
};

export default DisplayMedia;

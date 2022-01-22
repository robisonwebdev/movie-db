import React from 'react';
import Card from './Card';
import '../../styles/Home/DisplayMedia.css';

const DisplayMedia = ({ media }) => {
    const buildCards = media?.map(item => { 
       return <Card key={item.id} media={item} />
    });

    return (
        <div className='home_media_content'>
            {buildCards}
        </div>
    );
};

export default DisplayMedia;

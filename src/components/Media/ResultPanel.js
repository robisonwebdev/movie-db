import React from 'react';
import Card from '../Home/Card';
import '../../styles/Media/ResultPanel.css';

const ResultPanel = ({ media }) => {
    const generateMediaList = media.map(item => {
        return <Card key={item.id} media={item} />
    })

    return (
        <div className='resultPanel'>
            {generateMediaList}
        </div>
    )
};

export default ResultPanel;

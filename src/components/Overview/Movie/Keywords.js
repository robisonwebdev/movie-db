import React from 'react';
import '../../../styles/Overview/Keywords.css';

const Keywords = ({ keywords }) => {
    const getKeywords = keywords.map(keyword => {
        return (
            <li key={keyword.id} className='keyword'>{keyword.name}</li>
        );
    });

    return (
        <section className='overview_keywords'>
            <h4>Keywords</h4>
            <div className='keywords'>
                <ul>
                    {getKeywords}
                </ul>
            </div>
        </section>
    );
};

export default Keywords;

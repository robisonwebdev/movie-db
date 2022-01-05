import React from 'react';

const Keywords = ({ keywords }) => {
    const getKeywords = keywords.map(keyword => {
        return (
            <li key={keyword.id}>{keyword.name}</li>
        );
    })

    return (
        <section className='overview_keywords'>
            <h4>Keywords</h4>
            <div className='keywords'>
                <ul>
                    {getKeywords}
                </ul>
            </div>
        </section>
    )
};

export default Keywords;

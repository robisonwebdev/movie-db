import React from 'react';
import Card from '../Home/Card';
import '../../styles/Media/ResultPanel.css';

const ResultPanel = ({ movies }) => {
    const generateMovieList = movies.map(movie => {
        return <Card key={movie.id} media={movie} />
    })

    return (
        <div className='resultPanel'>
            {generateMovieList}
        </div>
    )
};

export default ResultPanel;

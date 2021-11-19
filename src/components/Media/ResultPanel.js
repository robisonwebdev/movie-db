import React from 'react';
import Card from './Card';
import '../styles/ResultPanel.css';

const ResultPanel = ({ movies }) => {
    const generateMovieList = movies.map(movie => {
        return <Card key={movie.id} movie={movie} />
    })

    return (
        <div className='resultPanel'>
            {generateMovieList}
        </div>
    )
};

export default ResultPanel;

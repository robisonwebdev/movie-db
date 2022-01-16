import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Overview/Recommendations.css';

const Recommendations = ({ recommendations }) => {
    const getRecommendations = recommendations.map(item => {
        const getImage = () => {
            const imagePath = `https://image.tmdb.org/t/p/w250_and_h141_face/${item.backdrop_path}`;

            return <img src={imagePath} alt={item.title} />
        };

        const getPercentage = () => {
            const vote_average = item.vote_average * 10;

            return Math.round(vote_average)
        }

        return (
            <div className='recommendation_item'>
                <Link to={`/movie/${item.id}`}>{getImage()}</Link>
                <div>
                    <Link to={`/movie/${item.id}`}><p>{item.title}</p></Link>
                    <p>{`${getPercentage()}%`}</p>
                </div>
            </div>
        );
    });

    return (
        <section className='overview_recommendations'>
            <h1>Recommendations</h1>
            <div className='recommendation_list'>
                {getRecommendations}
            </div>
        </section>
    )
};

export default Recommendations;

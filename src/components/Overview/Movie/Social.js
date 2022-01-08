import React from 'react';
import ReviewCard from './ReviewCard';
import '../../../styles/Overview/Social.css';

const Social = ({ movie }) => {
    const reviews = movie.reviews.results;
    const reviewsTotal = movie.reviews.total_results;
    const randomReview = reviews[Math.floor(Math.random() * reviews.length)];

    return (
        <section className='overview_social borderBottom'>
            <div className='social_header'>
                <h2>Social</h2>
                <ul>
                    <li>Reviews <span>{reviewsTotal}</span></li>
                </ul>
            </div>
            <div className='social_content'>
                <ReviewCard review={randomReview} />
                <strong>Read All Reviews</strong>
            </div>
        </section>
    )
};

export default Social;

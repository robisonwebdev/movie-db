import React from 'react';
import ReviewCard from './ReviewCard';
import '../../../styles/Overview/Social.css';

const Social = ({ show }) => {
    const reviews = show.reviews.results;
    const reviewsTotal = show.reviews.total_results;
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
                {reviews.length === 0 ? <p>{`We don't have any reviews for ${show.title}`}</p> : <ReviewCard review={randomReview} />}
                {reviews.length === 0 ? null : <strong>Read All Reviews</strong>}
            </div>
        </section>
    )
};

export default Social;

import React from 'react';
import '../../../styles/Overview/Social.css';

const Social = ({ movie }) => {
    const reviewsTotal = movie.reviews.total_results;

    return (
        <section className='overview_social borderBottom'>
            <div className='social_header'>
                <h2>Social</h2>
                <ul>
                    <li>Reviews <span>{reviewsTotal}</span></li>
                </ul>
            </div>
            <div className='social_content'>
                TEMP
            </div>
        </section>
    )
};

export default Social;

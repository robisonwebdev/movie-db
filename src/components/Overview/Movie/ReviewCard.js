import React from 'react';
import '../../../styles/Overview/Review.css';

const ReviewCard = ({ review }) => {
    const getUsername = review.author_details.username;

    const getAvatar = () => {
        const avatarPath = review.author_details.avatar_path;

        if (avatarPath === null) {
            return `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;
        }

        if (avatarPath.includes('http')) {
            return avatarPath.slice(1);
        }

        return `https://image.tmdb.org/t/p/w64_and_h64_face/${avatarPath}`;
    }

    const getRating = () => {
        if (review.author_details.rating !== null) {
            const rating = review.author_details.rating.toFixed(1);
            return (
                <p className='review_rating'><i className='las la-star' /> {rating}</p>
            );
        }

        return null;
    }

    const getReview = () => {
        const content = review.content;

        if (content.length > 600) {
            return (
                <p>{content.slice(0, 601)}... <span className='read_more'>read the rest.</span></p>
            );
        }

        return content;
    }

    const getWrittenDate = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const initalDate = review.created_at;
        const newDate = new Date(initalDate);
        const month = newDate.getUTCMonth();
        const day = newDate.getUTCDate();
        const year = newDate.getUTCFullYear();

        return `${months[month]} ${day}, ${year}`;
    }

    return (
        <section className='review_card'>
            <div className='review_header'>
                <img src={getAvatar()} alt={`${getUsername} avatar`} />
                <div className='review_title'>
                    <div>
                        <h3>{`A review by ${getUsername}`}</h3>
                        {getRating()}
                    </div>
                    <p className='review_writtenBy'>{`Written by ${getUsername.toUpperCase()} on ${getWrittenDate()}`}</p>
                </div>
            </div>
            <div className='review_content'>
                {getReview()}
            </div>
        </section>
    )
};

export default ReviewCard;

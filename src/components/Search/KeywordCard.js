import React from 'react';
import '../../styles/Search/KeywordCard.css';

const KeywordCard = ({ keyword }) => {
    return (
        <li className='keyword'>
            {keyword.name}
        </li>
    )
};

export default KeywordCard;

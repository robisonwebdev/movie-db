import React from 'react';

const KeywordCard = ({ keyword }) => {
    return (
        <li className='keyword'>
            {keyword.name}
        </li>
    )
};

export default KeywordCard;

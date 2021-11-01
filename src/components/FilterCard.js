import React from 'react';
import '../styles/FilterCard.css';

const FilterCard = ({ component, title }) => {
    return (
        <div className='filterCard'>
            <p className='filterCardTitle'>{title}</p>
            {component}
        </div>
    )
};

export default FilterCard;

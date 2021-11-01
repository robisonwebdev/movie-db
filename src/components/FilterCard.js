import React, { useState } from 'react';
import '../styles/FilterCard.css';

const FilterCard = ({ component, title }) => {
    const [openCard, setOpenCard] = useState(false);

    const handleOpenCard = () => {
        setOpenCard(!openCard);
    }

    return (
        <div className='filterCard'>
            <p className='filterCardTitle' onClick={handleOpenCard}>
                {title}
            </p>
            <div className='filterContent'>{component}</div>
        </div>
    )
};

export default FilterCard;

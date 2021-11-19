import React, { useState } from 'react';
import '../../styles/Media/FilterCard.css';

const FilterCard = ({ component, title }) => {
    const [openCard, setOpenCard] = useState(false);

    const handleOpenCard = () => {
        setOpenCard(!openCard);
    }

    return (
        <div className='filterCard'>
            <div className='filterCardTitle' onClick={handleOpenCard}>
                <p>{title}</p>
                {openCard ? <i className='las la-angle-down' /> : <i className='las la-angle-right' />}
            </div>            
            {openCard
                ?   <div className='filterContent'>
                        {component}
                    </div>
                :   null
            }
        </div>
    )
};

export default FilterCard;

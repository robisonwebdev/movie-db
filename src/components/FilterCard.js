import React from 'react';

const FilterCard = ({ component, title }) => {
    return (
        <div className='filterCard'>
            <p>{title}</p>
            {component}
        </div>
    )
};

export default FilterCard;

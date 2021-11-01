import React from 'react';
import FilterCard from './FilterCard';
import Sort from './Sort';

const FilterPanel = () => {
    return (
        <div className='filterPanel'>
            <FilterCard
                title='Sort'
                component={<Sort />}
            />
        </div>
    )
};

export default FilterPanel;

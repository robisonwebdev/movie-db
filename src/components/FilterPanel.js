import React, { useState } from 'react';
import FilterCard from './FilterCard';
import Sort from './Sort';

const FilterPanel = () => {
    const [sort, setSort] = useState('pop_des')

    return (
        <div className='filterPanel'>
            <FilterCard
                component={<Sort value={sort} />}
                title='Sort'
            />
        </div>
    )
};

export default FilterPanel;

import React, { useState } from 'react';
import FilterCard from './FilterCard';
import Button from './Button';
import Sort from './Sort';

const FilterPanel = () => {
    const [sort, setSort] = useState('pop_des')

    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    return (
        <div className='filterPanel'>
            <FilterCard
                component={<Sort onChange={handleSortChange} value={sort} />}
                title='Sort'
            />
            <Button
                text='Search'
                type='submit'
            />
        </div>
    )
};

export default FilterPanel;

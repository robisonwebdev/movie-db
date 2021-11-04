import React, { useState } from 'react';
import FilterCard from './FilterCard';
import Button from './Button';
import Sort from './Sort';
import '../styles/FilterPanel.css';

const FilterPanel = ({ setSortBy }) => {
    const [sort, setSort] = useState('pop_des');

    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSortBy(sort);
    };

    return (
        <div className='filterPanel'>
            <form onSubmit={handleSubmit}>
                <FilterCard
                    component={<Sort onChange={handleSortChange} onSubmit={handleSubmit} value={sort} />}
                    title='Sort'
                />
                <Button
                    text='Search'
                    type='submit'
                />
            </form>            
        </div>
    )
};

export default FilterPanel;

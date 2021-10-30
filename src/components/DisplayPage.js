import React from 'react';
import FilterPanel from './FilterPanel';

const DisplayPage = ({}) => {
    return (
        <div className='displayPage'>
            <h2>Title</h2>
            <div className='results'>
                <FilterPanel />
                <p>--Movies--</p>
            </div>
        </div>
    )
};

export default DisplayPage;

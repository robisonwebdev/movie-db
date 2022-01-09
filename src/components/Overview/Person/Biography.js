import React from 'react';
import '../../../styles/Overview/Person/Biography.css';

const Biography = ({ text }) => {
    return (
        <div className='biography'>
            <h3>Biography</h3>
            <p className='new-line'>{text}</p>
        </div>
    )
};

export default Biography;

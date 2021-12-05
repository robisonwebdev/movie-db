import React, { useState } from 'react';

const CreditsList = ({ credits }) => {
    const [department, setDepartment] = useState('Acting');
    const [actingCredits, setActingCredits] = useState([]);

    return (
        <div className='creditsList'>
            <div className='credits_Header'>
                <h3>{department}</h3>
                <div className='credit_Filters'></div>
            </div>
            <div className='credits_body'></div>
        </div>
    )
};

export default CreditsList;

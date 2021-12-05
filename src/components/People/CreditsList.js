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
    );
};

const CreditGroup = () => {
    return (
        <div className='creditGroup'>

        </div>
    );
};

const CreditItem = () => {
    return (
        <div className='creditItem'>
            <p>{`year`}</p>
            <i />
            <p>{`media title`}</p>
        </div>
    );
}

export default CreditsList;

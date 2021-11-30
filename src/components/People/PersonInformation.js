import React from 'react';
import PersonalInfo from './PersonalInfo';
import '../../styles/People/PersonInformation.css';

const PersonInformation = () => {
    return (
        <div className='personInformation'>
            <div className='personInformation_left'>
                <img src='#' alt='#' />
                <PersonalInfo />
            </div>
            <div className='personInformation_right'>Right</div>
        </div>
    )
};

export default PersonInformation;

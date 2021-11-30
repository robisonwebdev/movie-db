import React from 'react';
import PersonalInfo from './PersonalInfo';
import '../../styles/People/PersonInformation.css';

const PersonInformation = () => {
    return (
        <div className='personInformation'>
            <div className='personInformation_left'>
                <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sOi4UZxflV07E7QXUaJTHROGlPU.jpg' alt='#' />
                <PersonalInfo />
            </div>
            <div className='personInformation_right'>Right</div>
        </div>
    )
};

export default PersonInformation;

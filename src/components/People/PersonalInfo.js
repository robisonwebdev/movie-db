import React from 'react';
import '../../styles/People/PersonalInfo.css';

const PersonalInfo = () => {
    return (
        <div className='personalInfo'>
            <h2>Personal Info</h2>
            <PersonalInfoSection info={'Temp Text'} title='Known For' />
            <PersonalInfoSection info={'Temp Text'} title='Known Credits' />
            <PersonalInfoSection info={'Temp Text'} title='Gender' />
            <PersonalInfoSection info={'Temp Text'} title='Birthday' />
            <PersonalInfoSection info={'Temp Text'} title='Place of Birth' />
            <PersonalInfoSection info={'Temp Text'} title='Also Known As' />
        </div>
    )
};

export default PersonalInfo;

const PersonalInfoSection = ({ info, title}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
}

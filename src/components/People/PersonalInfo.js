import React from 'react';
import '../../styles/People/PersonalInfo.css';

const PersonalInfo = () => {
    return (
        <div className='personalInfo'>
            <h3>Personal Info</h3>
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
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
    );
}

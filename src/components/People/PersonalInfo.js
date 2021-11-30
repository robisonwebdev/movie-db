import React from 'react';
import '../../styles/People/PersonalInfo.css';

const PersonalInfo = ({ person }) => {
    const getBirthDay = () => {
        const today = new Date();
        const birthDate = new Date(person.birthday);
        const age = today.getFullYear() - birthDate.getFullYear();

        return `${person.birthday} (${age} years old)`;
    }

    return (
        <div className='personalInfo'>
            <h3>Personal Info</h3>
            <PersonalInfoSection info={person.known_for_department} title='Known For' />
            <PersonalInfoSection info={'Temp Text'} title='Known Credits' />
            <PersonalInfoSection info={'Temp Text'} title='Gender' />
            <PersonalInfoSection info={getBirthDay()} title='Birthday' />
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

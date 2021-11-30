import React from 'react';
import '../../styles/People/PersonalInfo.css';

const PersonalInfo = ({ person }) => {
    const getBirthDay = () => {
        const today = new Date();
        const birthDate = new Date(person.birthday);
        const age = today.getFullYear() - birthDate.getFullYear();

        return `${person.birthday} (${age} years old)`;
    };

    const getGender = () => {
        if (person.gender === 0) {
            return 'Unspecified'
        };

        if (person.gender === 1) {
            return 'Female'
        };

        if (person.gender === 2) {
            return 'Male'
        };

        return null;
    }

    return (
        <div className='personalInfo'>
            <h3>Personal Info</h3>
            <PersonalInfoSection info={person.known_for_department} title='Known For' />
            <PersonalInfoSection info={'Temp Text'} title='Known Credits' />
            <PersonalInfoSection info={getGender()} title='Gender' />
            <PersonalInfoSection info={getBirthDay()} title='Birthday' />
            <PersonalInfoSection info={person.place_of_birth} title='Place of Birth' />
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

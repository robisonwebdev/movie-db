import React from 'react';
import '../../styles/People/PersonalInfo.css';

const PersonalInfo = ({ combinedCredits, person }) => {
    const getBirthDay = () => {
        const today = new Date();
        const birthDate = new Date(person.birthday);
        const age = today.getFullYear() - birthDate.getFullYear();

        return `${person.birthday} (${age} years old)`;
    };

    const getKnownCredits = () => {
        return combinedCredits.cast.length;
    }

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
            <Info info={person.known_for_department} title='Known For' />
            <Info info={getKnownCredits()} title='Known Credits' />
            <Info info={getGender()} title='Gender' />
            <Info info={getBirthDay()} title='Birthday' />
            <Info info={person.place_of_birth} title='Place of Birth' />
            <AlsoKnownAs person={person} title='Also Known As' />
        </div>
    )
};

export default PersonalInfo;

const Info = ({ info, title}) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
    );
}

const AlsoKnownAs = ({ person, title }) => {
    const names = person.also_known_as.map((name, index) => {
        return <p key={index}>{name}</p>
    });

    return (
        <div>
            <h4>{title}</h4>
            {names}
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import Table from './Table';
import '../../styles/People/Credits.css';

const Credits = ({ credits }) => {
    const [department, setDepartment] = useState('Acting');
    const [departments, setDepartments] = useState([]);
    const [actingCredits, setActingCredits] = useState([]);
    const [optionValue, setOptionValue] = useState('Department')

    useEffect(() => {
        const groupByYear = credits.cast.reduce((r, a) => {
            r[new Date(a.release_date || a.first_air_date).getUTCFullYear()] = [...r[new Date(a.release_date || a.first_air_date).getUTCFullYear()] || [], a];
            return r;
        }, {});

        const newArray = Object.keys(groupByYear).map((key) => groupByYear[key]).reverse();

        setActingCredits(newArray);
    }, []);

    // Get departments
    useEffect(() => {
        const newArray = [];

        if (credits.cast) {
            newArray.push('Acting');
        }

        credits.crew.forEach((obj) => {
            if (!newArray.includes(obj.department)) {
                newArray.push(obj.department);
            }
        });

        setDepartments(newArray);
    }, [])

    const populateOptions = departments.map(item => {
        return <option key={item.toLowerCase()} value={item.toLowerCase()}>{item}</option>
    });

    const handleForm = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        setOptionValue(event.target.value)        
    };

    const handleClearButton = () => {
        setOptionValue('Department');
    };

    return (
        <div className='credits'>
            {console.log(departments)}
            <div className='credits_Header'>
                <h3>{department}</h3>
                <div className='credit_Filters'>
                    {optionValue === 'Department' ? null : <button type='button' onClick={handleClearButton}>Clear</button>}
                    <form onSubmit={handleForm}>
                        <select value={optionValue} onChange={handleChange}>
                            <option value="Department" disabled hidden>Department</option>
                            {populateOptions}
                        </select>
                    </form>
                </div>
            </div>
            <Table items={actingCredits} />
        </div>
    );
};

export default Credits;

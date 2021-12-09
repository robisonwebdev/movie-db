import React, { useEffect, useState } from 'react';
import '../../styles/People/Credits.css';

const Credits = ({ credits }) => {
    const [department, setDepartment] = useState('Acting');
    const [departments, setDepartments] = useState([]);
    const [actingCredits, setActingCredits] = useState([]);
    const [selectValue, setSelectValue] = useState('Department')

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

    const buildTableGroups = actingCredits.map(arr =>{
        return <TableGroup key={Math.floor(Math.random() * 99999)} group={arr} />
    });

    const populateOptions = departments.map(item => {
        return <option key={item.toLowerCase()} value={item.toLowerCase()}>{item}</option>
    });

    return (
        <div className='credits'>
            {console.log(departments)}
            <div className='credits_Header'>
                <h3>{department}</h3>
                <div className='credit_Filters'>
                    <form>
                        <select defaultValue={selectValue}>
                            <option value="Department" disabled hidden>Department</option>
                            {populateOptions}
                        </select>
                    </form>
                </div>
            </div>
            <table className='credits_table'>
                <tbody>
                    {buildTableGroups}
                </tbody>
            </table>
        </div>
    );
};

const TableGroup = ({ group }) => {
    const buildTableItems = group.map(item => <TableItem key={item.id} item={item} />);

    return (
        <tr className='tableGroup'>
            <td className='tableTest'>
                <table>
                    <tbody>
                        {buildTableItems}
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

const TableItem = ({ item }) => {
    const itemYear = () => {
        let itemDate;
        let itemYear;

        if (item.release_date === "" || item.first_air_date === "" || (!item.release_date && !item.first_air_date)) {
            return "—";
        }

        if (item.release_date) {
            itemDate = new Date(item.release_date);
            itemYear = itemDate.getUTCFullYear();
        }
    
        if (item.first_air_date) {
            itemDate = new Date(item.first_air_date);
            itemYear = itemDate.getUTCFullYear();
        }

        return itemYear;
    }

    return (
        <tr className='tableItem'>
            <td>{itemYear()}</td>
            <td><i className='las la-circle' /></td>
            <td>{item.title || item.name} </td>
        </tr>
    );
}

export default Credits;

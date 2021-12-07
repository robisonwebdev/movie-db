import React, { useEffect, useState } from 'react';
import '../../styles/People/Credits.css';

const Credits = ({ credits }) => {
    const [department, setDepartment] = useState('Acting');
    const [actingCredits, setActingCredits] = useState([]);

    useEffect(() => {
        const groupByYear = credits.cast.reduce((r, a) => {
            r[new Date(a.release_date || a.first_air_date).getUTCFullYear()] = [...r[new Date(a.release_date || a.first_air_date).getUTCFullYear()] || [], a];
            return r;
        }, {});

        const newArray = Object.keys(groupByYear).map((key) => groupByYear[key]).reverse();

        setActingCredits(newArray);
    }, []);

    const buildTableGroups = actingCredits.map(arr =>{
        return <TableGroup key={Math.floor(Math.random() * 99999)} group={arr} />
    });

    return (
        <div className='credits'>
            <div className='credits_Header'>
                <h3>{department}</h3>
                <div className='credit_Filters'></div>
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

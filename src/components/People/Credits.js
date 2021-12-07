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

    const buildTimeline = actingCredits.map(arr =>{
        return <CreditGroup key={Math.floor(Math.random() * 99999)} group={arr} />
    });

    return (
        <div className='credits'>
            <div className='credits_Header'>
                <h3>{department}</h3>
                <div className='credit_Filters'></div>
            </div>
            <div className='credits_body'>
                {buildTimeline}
            </div>
        </div>
    );
};

const CreditGroup = ({ group }) => {
    const buildItems = group.map(item => <CreditItem key={item.id} item={item} />);

    return (
        <div className='creditGroup'>
            {buildItems}
        </div>
    );
};

const CreditItem = ({ item }) => {
    const itemYear = () => {
        let itemDate;
        let itemYear;

        if (item.release_date === "" || item.first_air_date === "") {
            return "-";
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
        <div className='creditItem'>
            <p>{itemYear()}</p>
            <i />
            <p>{item.title || item.name}</p>
        </div>
    );
}

export default Credits;

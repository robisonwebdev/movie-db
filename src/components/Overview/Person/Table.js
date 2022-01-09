import React from 'react';
import '../../../styles/Overview/Person/Table.css';

const Table = ({ items }) => {
    const buildGroups = items.map(item => {
        return <TableGroup key={Math.floor(Math.random() * 99999)} group={item} />
    });

    return (
        <table className='credits_table'>
            <tbody>
                {buildGroups}
            </tbody>
        </table>
    )
};

const TableGroup = ({ group }) => {
    const buildTableItems = group.map(item => <TableItem key={Math.floor(Math.random() * 99999)} item={item} />);

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

export default Table;

import React from 'react';
import '../../styles/Search/CompanyCard.css';

const CompanyCard = ({ company }) => {
    return (
        <li className='company'>
            <p>{company.name}</p>
            {company.origin_country === "" ? null : <span>{company.origin_country}</span>}
        </li>
    )
};

export default CompanyCard;

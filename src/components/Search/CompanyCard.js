import React from 'react';

const CompanyCard = ({ company }) => {
    return (
        <li className='company'>
            <p>{company.name}</p>
            {company.origin_country === "" ? null : <span>{company.origin_country}</span>}
        </li>
    )
};

export default CompanyCard;

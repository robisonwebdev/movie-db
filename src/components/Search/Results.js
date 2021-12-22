import React from 'react';
import MediaCard from './MediaCard';
import PeopleCard from './PeopleCard';
import '../../styles/Search/Results.css';
import CompanyCard from './CompanyCard';

const Results = ({ media, type }) => {
    // Media Type movie, shows, or collection
    if (type === 'movie' || type==='shows' || type==='collection') {
        const mapMedia = media.results?.map(item => {
            return <MediaCard key={item.id} media={item} type={type} />
        });

        return (
            <div className='result_card'>
                {mapMedia}
            </div>
        );
    }

    // People
    if (type === 'people') {
        const mapPeople = media.results?.map(person => {
            return <PeopleCard key={person.id} person={person} />
        });

        return (
            <div className='result_card'>
                {mapPeople}
            </div>
        );
    }

    // Company
    if (type === 'companies') {
        const mapCompanies = media.results?.map(company => {
            return <CompanyCard key={company.id} company={company} />
        });

        return (
            <ul className='result_list'>
                {mapCompanies}
            </ul>
        );
    }

    return (
        <div className='results'>
            <p>ERROR</p>
        </div>
    )
};

export default Results;

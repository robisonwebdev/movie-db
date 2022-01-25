import React from 'react';
import CompanyCard from './CompanyCard';
import KeywordCard from './KeywordCard';
import MediaCard from './MediaCard';
import PeopleCard from './PeopleCard';
import '../../styles/Search/Results.css';

const Results = ({ mediaList, mediaID }) => {
    // Media Type movie, shows, or collection
    if (mediaID === 'movies_001' || mediaID==='shows_001' || mediaID==='collections_001') {
        const mapMedia = mediaList.results?.map(item => {
            return <MediaCard key={item.id} media={item} type={mediaID} />
        });

        return (
            <div className='result_cards'>
                {mapMedia}
            </div>
        );
    }

    // People
    if (mediaID === 'people_001') {
        const mapPeople = mediaList.results?.map(person => {
            return <PeopleCard key={person.id} person={person} />
        });

        return (
            <div className='result_cards'>
                {mapPeople}
            </div>
        );
    }

    // Company
    if (mediaID === 'companies_001') {
        const mapCompanies = mediaList.results?.map(company => {
            return <CompanyCard key={company.id} company={company} />
        });

        return (
            <ul className='result_list'>
                {mapCompanies}
            </ul>
        );
    }

    if (mediaID === 'keywords_001') {
        const mapKeywords = mediaList.results?.map(keyword => {
            return <KeywordCard key={keyword.id} keyword={keyword} />
        });

        return (
            <ul className='result_list'>
                {mapKeywords}
            </ul>
        );
    };

    return (
        <div className='results_error'>
            <p>ERROR</p>
        </div>
    )
};

export default Results;

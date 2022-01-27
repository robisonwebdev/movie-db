import React from 'react';
import CompanyCard from './CompanyCard';
import KeywordCard from './KeywordCard';
import MediaCard from './MediaCard';
import PeopleCard from './PeopleCard';
import '../../styles/Search/Results.css';

const Results = ({ mediaList, mediaID }) => {
    const getClassName = () => {
        switch (mediaID) {
            case 'collections_001':
            case 'movies_001':
            case 'people_001':
            case 'shows_001':
                return 'result_cards';
            case 'companies_001':
            case 'keywords_001':
                return 'result_list';
            default:
                return null;
        };
    };

    const mapMedia = mediaList.results?.map(media => {
        switch (mediaID) {
            case 'collections_001':
                return <MediaCard key={media.id} media={media} type='collection' />
            case 'companies_001':
                return <CompanyCard key={media.id} company={media} />
            case 'keywords_001':
                return <KeywordCard key={media.id} keyword={media} />
            case 'movies_001':
                return <MediaCard key={media.id} media={media} type='movie' />
            case 'people_001':
                return <PeopleCard key={media.id} person={media} />
            case 'shows_001':
                return <MediaCard key={media.id} media={media} type='tv' />
        };
    });

    return (
        <section className={getClassName()}>
            {mapMedia}
        </section>
    );
};

export default Results;

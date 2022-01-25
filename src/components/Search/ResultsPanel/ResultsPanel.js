import React from 'react';
import Filter from '../Filter';
import '../../../styles/Search/ResultsPanel.css';

const ResultsPanel = ({ results }) => {
    const [ collections, companies, keywords, movies, people, shows ] = results;
    const filters = [
        {
            filter: collections,
            id: 'collections_001',
            title: 'Collections'
        },
        {
            filter: companies,
            id: 'companies_001',
            title: 'Companies'
        },
        {
            filter: keywords,
            id: 'keywords_001',
            title: 'Keywords'
        },
        {
            filter: movies,
            id: 'movies_001',
            title: 'Movies'
        },
        {
            filter: people,
            id: 'people_001',
            title: 'People'
        },
        {
            filter: shows,
            id: 'shows_001',
            title: 'TV Shows'
        }
    ];

    filters.sort((a, b) => {
        return b.filter.total_results - a.filter.total_results;
    });

    const generateFilterPanel = filters.map(obj => {
        return <Filter key={obj.id} number={obj.filter.total_results}  title={obj.title} />
    }); 

    return (
        <section className='search_results_panel'>
            <h3>Search Results</h3>
            {generateFilterPanel}
        </section>
    );
};

export default ResultsPanel;

import React from 'react';
import Filter from '../Filter';
import '../../../styles/Search/ResultsPanel.css';

const ResultsPanel = ({ results, setMediaList, setMediaID }) => {
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

    const generateFilterPanel = () => {
        filters.sort((a, b) => {
            return b.filter.total_results - a.filter.total_results;
        });

        const mapFilters = filters.map(obj => {
            return <Filter key={obj.id} number={obj.filter.total_results} onClick={() => handleClick(obj.id)}  title={obj.title} />
        });

        return mapFilters;
    };

    const handleClick = (id) => {
        switch (id) {
            case 'collections_001':
                setMediaList(collections);
                setMediaID(id);
                break;
            case 'companies_001':
                setMediaList(companies);
                setMediaID(id);
                break;
            case 'keywords_001':
                setMediaList(keywords);
                setMediaID(id);
                break;
            case 'movies_001':
                setMediaList(movies);
                setMediaID(id);
                break;
            case 'people_001':
                setMediaList(people);
                setMediaID(id);
                break;
            case 'shows_001':
                setMediaList(shows);
                setMediaID(id);
                break;
        };
    }

    return (
        <section className='search_results_panel'>
            <h3>Search Results</h3>
            {generateFilterPanel()}
        </section>
    );
};

export default ResultsPanel;

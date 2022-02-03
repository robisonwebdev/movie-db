import React from 'react';
import '../../../styles/Overview/Company/Header.css';
import Navigation from './Navigation';

const Header = ({ data, format }) => {
    const [companyData, mediaData] = data;

    const getDetails = () => {
      const name = companyData.name;
      const headquarters = companyData.headquarters;
      const country = companyData.origin_country;
      const homepage = companyData.homepage;

      return (
        <ul>
          {name === null ? null : <li><i className="las la-id-card-alt" /> {name}</li>}
          {headquarters === null ? null : <li><i className="las la-map-marker" /> {headquarters}</li>}
          {country === null ? null : <li><i className="las la-globe-americas" /> {country}</li>}
          {homepage === null ? null : <li><i className="las la-link" /> <a href={homepage} target='_blank'>Homepage</a></li>}
        </ul>
      );
    }

    const getLogo = () => {
        if (companyData.logo_path === null) {
            return <h2>{companyData.name}</h2>;
        };

        return <img src={`https://image.tmdb.org/t/p/h50_filter(negate,000,666)${companyData.logo_path}`} />
    }

    const getMediaCount = () => {
      return <h2>{mediaData.total_results} {format === 'movie' ? 'movies' : 'shows'}</h2>
    };

  return (
    <section className='overview_company_header'>
      <div className='company_header_background'>
        {console.log('companyData', mediaData)}
        <div className='company_header_upper'>
          {getLogo()}
          {getMediaCount()}
        </div>
        <div className='company_header_lower'>
          {getDetails()}
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default Header;

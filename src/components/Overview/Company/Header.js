import React from 'react';
import '../../../styles/Overview/Company/Header.css';

const Header = ({ data, format }) => {
    const [companyData, companyMovieData, companyTVData] = data;

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
      if (format === 'movie') {
        return <h2>{companyMovieData.total_results} movies</h2>
      }

      if (format === 'shows') {
        return <h2>{companyTVData.total_results} shows</h2>
      }

      return null;
    }

  return (
    <section className='overview_company_header'>
      <div className='company_header_background'>
        {console.log('companyData', companyMovieData)}
        <div className='company_header_upper'>
          {getLogo()}
          {getMediaCount()}
        </div>
        <div className='company_header_lower'>
          {getDetails()}
        </div>
      </div>
    </section>
  );
};

export default Header;

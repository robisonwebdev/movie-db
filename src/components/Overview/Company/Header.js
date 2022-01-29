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
          {name === null ? null : <li><i class="las la-id-card-alt" /> {name}</li>}
          {headquarters === null ? null : <li><i class="las la-map-marker" /> {headquarters}</li>}
          {country === null ? null : <li><i class="las la-globe-americas" /> {country}</li>}
          {homepage === null ? null : <li><i class="las la-link" /> <a href={homepage} target='_blank'>Homepage</a></li>}
        </ul>
      );
    }

    const getLogo = () => {
        if (companyData.logo_path === null) {
            return companyData.name;
        };

        return <img src={`https://image.tmdb.org/t/p/h50_filter(negate,000,666)${companyData.logo_path}`} />
    }

  return (
    <section className='overview_company_header'>
      <div className='company_header_background'>
        {console.log('companyData', companyData)}
        <div className='company_header_upper'>
          {getLogo()}
        </div>
        <div className='company_header_lower'>
          {getDetails()}
        </div>
      </div>
    </section>
  );
};

export default Header;

import React from 'react';
import '../../../styles/Overview/Title.css';

const Title = ({ movie }) => {
    return (
        <div className='overview_title'>            
            <div className='overview_title_bar'>
                <h1>{movie.title}</h1>
                {/* <h1 className='title_Date'>{`(${getMovieDate('yyyy')})`}</h1> */}
            </div>
            <div className='overview_title_facts'> 
                {/* <p className='overviewCert'>{getMovieCertification()}</p> */}
                {/* <p>{getMovieDate('mm/dd/yyyy')}</p> */}
                {/* <p className='bulletPoint'>•</p> */}
                {/* <p>{getAndJoinGenres()}</p> */}
                {/* <p className='bulletPoint'>•</p> */}
                {/* <p>{convertRuntime()}</p> */}
            </div>
        </div>
    )
};

export default Title;

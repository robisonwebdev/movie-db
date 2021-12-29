import React from 'react';
import Poster from './Poster';
import Crew from './Crew';
import Description from './Description';
import Title from './Title';
import '../../styles/Overview/Header.css';

const Header = ({ media, format }) => {
    const backdropImage = `http://image.tmdb.org/t/p/original/${media.backdrop_path}`;
    const backdropStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${backdropImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    // if (type === 'movie') {
    //     return (
    //         <div className='overview_header' style={backdropStyle}>
    //             <div className='overview_header_content'>
    //                 <Poster media={media} />
    //                 <div className='overview_header_info'>
    //                     {console.log(media)}
    //                     <Title media={media} type={type} />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // if (type === 'show') {
    //     return (
    //         <div className='overview_header' style={backdropStyle}>
    //             <div className='overview_header_content'>
    //                 <Poster media={media} />
    //                 <div className='overview_header_info'>
    //                     <Title media={media} type={type} />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className='overview_header' style={backdropStyle}>
            <div className='overview_header_content'>
                <Poster media={media} />
                <div className='overview_header_info'>
                    <Title
                        media={media}
                        format={format}
                    />
                    {/* <Description
                        description={movie.overview}
                        tagline={movie.tagline}
                    />
                    <Crew
                        credits={credits}
                    /> */}
                </div>
            </div>
        </div>
    )
};

export default Header;

import React from 'react';
import OverviewPoster from './OverviewPoster';
import OverviewCrew from './OverviewCrew';
import OverviewDescription from './OverviewDescription';
import OverviewTitle from './OverviewTitle';
import '../../styles/movieOverview/OverviewHeader.css';

const OverviewHeader = ({ credits, movie, releaseDate }) => {
    return (
        <div className='overviewHeader'>
            <div className='overviewHeaderContent'>
                <OverviewPoster movie={movie} />
                <div>
                    <OverviewTitle
                        movie={movie}
                        releaseDate={releaseDate}
                    />
                    <OverviewDescription
                        description={movie.overview}
                    />
                    <OverviewCrew />
                </div>
            </div>
        </div>
    )
};

export default OverviewHeader;

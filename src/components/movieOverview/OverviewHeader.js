import React from 'react';
import OverviewPoster from './OverviewPoster';
import OverviewCrew from './OverviewCrew';
import OverviewDescription from './OverviewDescription';
import OverviewTitle from './OverviewTitle';

const OverviewHeader = ({ credits, movie, releaseDate }) => {
    return (
        <div className='overviewHeader'>
            <OverviewPoster movie={movie} />
            <div>
                <OverviewTitle
                    credits={credits}
                    movie={movie}
                    releaseDate={releaseDate}
                />
                <OverviewDescription />
                <OverviewCrew />
            </div>
        </div>
    )
};

export default OverviewHeader;

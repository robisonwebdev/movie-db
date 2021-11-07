import React from 'react';
import OverviewCrew from './OverviewCrew';
import OverviewDescription from './OverviewDescription';
import OverviewTitle from './OverviewTitle';

const OverviewHeader = ({ credits, movie, releaseDate }) => {
    return (
        <div className='overviewHeader'>
            <img />
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

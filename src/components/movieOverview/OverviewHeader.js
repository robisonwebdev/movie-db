import React from 'react';
import OverviewCrew from './OverviewCrew';
import OverviewDescription from './OverviewDescription';
import OverviewTitle from './OverviewTitle';

const OverviewHeader = ({ image }) => {
    return (
        <div className='overviewHeader'>
            <img src={image} />
            <div>
                <OverviewTitle />
                <OverviewDescription />
                <OverviewCrew />
            </div>
        </div>
    )
};

export default OverviewHeader;

import React from 'react';
import '../../styles/People/KnownFor.css';

const KnownFor = ({ knownFor }) => {
    const topEight = knownFor.cast.sort((a, b) => parseFloat(b.vote_count) - parseFloat(a.vote_count)).slice(0, 8);
    const mapTopEight = topEight.map(obj => {
        return <p>{obj.title}</p>
    })

    return (
        <div className='knownFor'>
            <h3>Known For</h3>
            <div className='knownFor_content'>
                {mapTopEight}
            </div>
        </div>
    )
};

export default KnownFor;

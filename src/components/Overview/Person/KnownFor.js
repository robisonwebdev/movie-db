import React from 'react';
import KnownForCard from './KnownForCard';
import '../../../styles/Overview/Person/KnownFor.css';

const KnownFor = ({ knownFor }) => {
    const topEight = knownFor.cast.sort((a, b) => parseFloat(b.vote_count) - parseFloat(a.vote_count)).slice(0, 8);
    const mapTopEight = topEight.map(obj => {
        return <KnownForCard key={obj.id} image={obj.poster_path} title={obj.title} />
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

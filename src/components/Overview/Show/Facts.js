import React from 'react';
import '../../../styles/Overview/Facts.css';

const Facts = ({ show }) => {
    const { networks, status, type } = show;

    const getNetwork = () => {
        const networkLogo = `http://image.tmdb.org/t/p/h30/${networks[0]?.logo_path}`;

        if (networks.length === 0) return '-';

        return <img src={networkLogo} alt={networks.name} />
    };

    return (
        <section className='overview_facts'>
            <h3>Facts</h3>
            <div>
                <strong>Status</strong>
                <p>{status}</p>
            </div>
            <div>
                <strong>Network</strong>
                {getNetwork()}
            </div>
            <div>
                <strong>Type</strong>
                <p>{type}</p>
            </div>
        </section>
    )
};

export default Facts;
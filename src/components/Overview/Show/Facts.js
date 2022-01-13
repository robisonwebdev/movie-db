import React from 'react';
import '../../../styles/Overview/Facts.css';

const Facts = ({ show }) => {
    const { networks, status } = show;

    const getNetwork = () => {
        const networkLogo = `http://image.tmdb.org/t/p/h30/${networks[0].logo_path}`

        return <img src={networkLogo} alt={networks.name} />
    }

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
        </section>
    )
};

export default Facts;
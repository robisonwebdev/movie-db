import React from 'react';
import '../../../styles/Overview/Facts.css';

const Facts = ({ show }) => {
    const { status } = show;

    return (
        <section className='overview_facts'>
            <h3>Facts</h3>
            <div>
                <strong>Status</strong>
                <p>{status}</p>
            </div>
        </section>
    )
};

export default Facts;
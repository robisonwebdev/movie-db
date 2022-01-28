import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key';
import Header from './Header';

const Company = () => {
    return (
        <section className='company_overview'>
            <Header />
        </section>
    )
};

export default Company;

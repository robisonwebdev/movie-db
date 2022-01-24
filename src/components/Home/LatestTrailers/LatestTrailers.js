import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import api_key from '../../../data/Key';
import DisplayMedia from '../DisplayMedia';
import MediaNav from '../MediaNav';

const LatestTrailers = () => {
    const [cardData, setCardData] = useState();
    const [loading, setLoading] = useState(true);
    const [rentData, setRentData] = useState([]);
    const [theaterData, setTheaterData] = useState([]);
    const [tvData, setTVData] = useState([]);

    return (
        <section className='home_media_container'>
            <MediaNav />
            {loading ? null : <DisplayMedia />}
        </section>
    );
};

export default LatestTrailers;

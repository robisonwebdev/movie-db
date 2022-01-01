import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_key from '../../../data/Key';

const Collection = () => {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchData = useCallback(() => {
        const collectionAPI = `https://api.themoviedb.org/3/collection/${id}?api_key=${api_key}&language=en-US`;

        setLoading(true);

        axios
        .get(collectionAPI)
        .then(res => {
            setCollection(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='collection_overview'>
            {loading ? null : console.log(collection)}
        </div>
    )
};

export default Collection;

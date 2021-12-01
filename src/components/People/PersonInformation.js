import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import '../../styles/People/PersonInformation.css';
import axios from 'axios';

const PersonInformation = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();
    const [person, setPerson] = useState([]);

    const { id } = useParams();

    const fetchData = useCallback(() => {
        const personAPI = ` https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`;

        setLoading(true);

        axios
        .get(personAPI)
        .then(res => {
            setImage(res.data.profile_path);
            setPerson(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [apiKey, id]);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className='personInformation'>
            <div className='personInformation_left'>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${image}`} alt='#' />
                {loading ? null : <PersonalInfo person={person} />}
            </div>
            <div className='personInformation_right'>Right</div>
        </div>
    )
};

export default PersonInformation;

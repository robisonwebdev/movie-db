import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import Biography from './Biography';
import KnownFor from './KnownFor';
import Credits from './Credits';
import '../../styles/People/PersonInformation.css';
import axios from 'axios';

const PersonInformation = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [combinedCredits, setCombinedCredits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();
    const [person, setPerson] = useState([]);

    const { id } = useParams();

    const fetchData = useCallback(() => {
        const combinedCredits_API = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${apiKey}&language=en-US`;
        const person_API = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`;

        const getCombinedCredits_Data = axios.get(combinedCredits_API);
        const getPerson_Data = axios.get(person_API);

        setLoading(true);

        axios
        .all([getCombinedCredits_Data, getPerson_Data])
        .then(axios.spread((...all_Data) => {
            const combinedCredits_Data = all_Data[0].data;
            const person_Data = all_Data[1].data;

            setCombinedCredits(combinedCredits_Data);
            setImage(person_Data.profile_path);
            setPerson(person_Data);
            setLoading(false);
        }))
        .catch(err => console.log(err))
    }, [apiKey, id]);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className='personInformation'>
            <div className='personInformation_left'>
                {loading ? null : <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${image}`} alt='#' />}
                {loading ? null : <PersonalInfo combinedCredits={combinedCredits} person={person} />}
            </div>
            <div className='personInformation_right'>
                {loading ? null : <h1>{person.name}</h1>}
                {loading ? null : <Biography text={person.biography} />}
                {loading ? null : <KnownFor knownFor={combinedCredits} />}
                {loading ? null : <Credits credits={combinedCredits} />}
            </div>
        </div>
    )
};

export default PersonInformation;

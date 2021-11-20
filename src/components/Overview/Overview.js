import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import TopBilledCast from './TopBilledCast';
import MovieStats from './MovieStats';
import '../../styles/Overview/Overview.css';
import { useParams } from 'react-router-dom';

const Overview = () => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [creditData, setCreditData] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const [releaseDateData, setReleaseDateData] = useState([]);
    const [usReleaseDate, setUSReleaseDate] = useState([]);

    const { id } = useParams();

    const fetchData = useCallback(() => {
        const movieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=release_dates,credits&&language=en-US`;
        const languagesAPI = ` https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`;

        const getMovie_Data = axios.get(movieAPI);
        const getLanguages_Data = axios.get(languagesAPI);

        setLoading(true);

        axios
            .all([getMovie_Data, getLanguages_Data])
            .then(axios.spread((...all_Data) => {
                const movie_Data = all_Data[0].data;
                const language_Data = all_Data[1].data;

                setMovieData(movie_Data);
                setReleaseDateData(movie_Data['release_dates']['results']);
                setCreditData(movie_Data.credits);
                setLanguages(language_Data);
                setLoading(false);
            }))
            .catch(err => console.log(err));
    }, [apiKey, id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Get US Release Date
    useEffect(() => {
        let usData = releaseDateData.filter(obj => obj['iso_3166_1'] === 'US');
        setUSReleaseDate(usData);
    }, [releaseDateData]);

    return (
        <div className='overview'>
            {loading ? null : <Header credits={creditData} movie={movieData} releaseDate={usReleaseDate} />}
            <div className='overviewDivider'>
                <div className='dividerLeft'>
                    {loading ? null : <TopBilledCast cast={creditData.cast} />}
                </div>
                <div className='dividerRight'>
                    {loading ? null :<MovieStats languages={languages} stats={movieData} />}
                </div>
            </div>            
        </div>
    )
};

export default Overview;

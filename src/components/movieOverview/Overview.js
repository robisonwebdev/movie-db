import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OverviewHeader from './OverviewHeader';
import '../../styles/movieOverview/Overview.css';

const Overview = ({ movieID }) => {
    const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
    const [creditData, setCreditData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const [releaseDateData, setReleaseDateData] = useState([]);
    const [usReleaseDate, setUSReleaseDate] = useState([]);

    useEffect(() => {
        setLoading(true);

        axios
            .get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=release_dates,credits&&language=en-US`)
            .then(res => {
                setMovieData(res.data);
                setReleaseDateData(res.data['release_dates']['results']);
                setCreditData(res.data.credits);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [apiKey]);

    // Get US Release Date
    useEffect(() => {
        let usData = releaseDateData.filter(obj => obj['iso_3166_1'] === 'US');
        setUSReleaseDate(usData);
    }, [releaseDateData])

    // useEffect(() => {
    //     if (!loading) {
    //       console.log('MovieData:', movieData);
    //       console.log('Release Date:', releaseDateData);
    //       console.log('Credits:', creditData);
    //     }
    //   }, [loading, movieData, releaseDateData, creditData]);

    return (
        <div>
            {loading ? null : <OverviewHeader credits={creditData} movie={movieData} releaseDate={usReleaseDate} />}
        </div>
    )
};

export default Overview;

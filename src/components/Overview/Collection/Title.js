import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import api_key from '../../../data/Key';

const Title = ({ collection }) => {
    const [loading, setLoading] = useState(true);
    const [movieCodes, setMovieCodes] = useState([]);
    const [showCodes, setShowCodes] = useState([]);

    const fetchData = useCallback(() => {
        const movieAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
        const showAPI = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}&language=en-US`;

        const getMovieData = axios.get(movieAPI);
        const getShowData = axios.get(showAPI);

        setLoading(true);

        axios
        .all([getMovieData, getShowData])
        .then(axios.spread((...allData) => {
            const movieData = allData[0].data.genres;
            const showData = allData[1].data.genres;

            setMovieCodes(movieData);
            setShowCodes(showData);
            setLoading(false);
        }))
        .catch(err => console.log(err))
    }, [])

    const getAndJoinGenres = () => {
        const genresIDs = [];
        const genres = [];

        // Build array of genres
        collection.parts.forEach(part => {
            const gernes = part.genre_ids;
            
            gernes.forEach(genre => {
                if (genresIDs.includes(genre) !== true) {
                    genresIDs.push(genre);
                }
            })

            
        });

        // Find name for each genre code
        genresIDs.forEach(genre => {
            // Search movie codes
            movieCodes.filter(object => {
                if (object.id === genre) {
                    if (genres.includes(object.name) !== true) {
                        genres.push(object.name);
                    }
                }

                return null;
            })

            // Search show codes
            showCodes.filter(object => {
                if (object.id === genre) {
                    if (genres.includes(object.name) !== true) {
                        genres.push(object.name);
                    }
                }

                return null;
            })
        });

        return genres.join(', ');
    };

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div className='overview_title'>            
            <div className='overview_title_bar'>
                <h1>{collection.name}</h1>
            </div>
            <div className='overview_title_facts'> 
                {loading ? null : <p>{getAndJoinGenres()}</p>}
            </div>
        </div>
    )
};

export default Title;

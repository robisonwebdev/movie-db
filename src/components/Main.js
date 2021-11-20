import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import axios from 'axios';
import Home from './Home/Home';
import Overview from './Overview/Overview';
import Media from './Media/Media';
import '../styles/Main.css';

const Main = () => {
  const [apiKey] = useState('9289aca3a6413b200619b263ac82e4c0');
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  // Get popular movies on load
  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&sort_bypage=1`)
      .then(res => {
        setPopularMovies(res.data.results)
        setLoading(false);
      })
      .catch(err => console.log(err))
    
  }, [apiKey]);

  // Temp useEffect
  useEffect(() => {
    if (!loading) {
      console.log(popularMovies);
    }
  }, [loading, popularMovies]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Media movies={popularMovies} title='Popular Movies' />} />
        <Route path='shows' element={<Media movies={popularMovies} title='Popular TV Shows' />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Main;
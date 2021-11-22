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

        <Route path='/movies' element={<Layout />}>
          <Route path='/movies/popular' element={<Media movies={popularMovies} title='Popular Movies' />} />
          <Route path='/movies/now_playing' element={<Media movies={popularMovies} title='Now Playing Movies' />} />
          <Route path='/movies/upcoming' element={<Media movies={popularMovies} title='Upcoming Movies' />} />
          <Route path='/movies/top_rated' element={<Media movies={popularMovies} title='Top Rated Movies' />} />
        </Route>

        <Route path='/shows' element={<Layout />}>
          <Route path='/shows/popular' element={<Media movies={popularMovies} title='Popular TV Shows' />} />
          <Route path='/shows/airing_today' element={<Media movies={popularMovies} title='TV Shows Airing Today' />} />
          <Route path='/shows/on_tv' element={<Media movies={popularMovies} title='Currently Airing TV Shows' />} />
          <Route path='/shows/top_rated' element={<Media movies={popularMovies} title='Top Rated TV Shows' />} />
        </Route>

        <Route path='/person' element={<Layout />}>
          <Route path='/person/popular_people' element={<p>People</p>} />
        </Route>
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
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home/Home';
import Media from './Media/Media';
import People from './People/People';
import Overview from '../components/Overview/Overview';
import '../styles/Main.css';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='/movies' element={<Layout />}>
        <Route path='/movies/popular' element={<Media format='movie' get='popular' title='Popular Movies' />} />
        <Route path='/movies/now_playing' element={<Media format='movie' get='now_playing' title='Now Playing Movies' />} />
        <Route path='/movies/upcoming' element={<Media format='movie' get='upcoming' title='Upcoming Movies' />} />
        <Route path='/movies/top_rated' element={<Media format='movie' get='top_rated' title='Top Rated Movies' />} />
        <Route index element={<Media format='movie' get='popular' title='Popular Movies' />} />
      </Route>

      <Route path='/movie' element={<Layout />}>
        <Route path='/movie/:id' element={<Overview />} />
      </Route>

      <Route path='/shows' element={<Layout />}>
        <Route path='/shows/popular' element={<Media format='tv' get='popular' title='Popular TV Shows' />} />
        <Route path='/shows/airing_today' element={<Media format='tv' get='airing_today' title='TV Shows Airing Today' />} />
        <Route path='/shows/on_tv' element={<Media format='tv' get='on_the_air' title='Currently Airing TV Shows' />} />
        <Route path='/shows/top_rated' element={<Media format='tv' get='top_rated' title='Top Rated TV Shows' />} />
        <Route index element={<Media format='tv' get='popular' title='Popular TV Shows' />} />
      </Route>

      <Route path='/person' element={<Layout />}>
        <Route path='/person/popular_people' element={<People />} />
        <Route index element={<People />} />
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
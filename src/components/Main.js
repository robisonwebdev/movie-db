import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home/Home';
import Media from './Media/Media';
import People from './People/People';
import Overview from '../components/Overview/Overview';
import '../styles/Main.css';
import PersonInformation from './People/PersonInformation';
import ResultsPage from './Search/ResultsPage';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='/movies' element={<Layout />}>
        <Route path='popular' element={<Media format='movie' get='popular' title='Popular Movies' />} />
        <Route path='now_playing' element={<Media format='movie' get='now_playing' title='Now Playing Movies' />} />
        <Route path='upcoming' element={<Media format='movie' get='upcoming' title='Upcoming Movies' />} />
        <Route path='top_rated' element={<Media format='movie' get='top_rated' title='Top Rated Movies' />} />
        <Route index element={<Media format='movie' get='popular' title='Popular Movies' />} />
      </Route>

      <Route path='/movie' element={<Layout />}>
        <Route path=':id' element={<Overview />} />
      </Route>

      <Route path='/shows' element={<Layout />}>
        <Route path='popular' element={<Media format='tv' get='popular' title='Popular TV Shows' />} />
        <Route path='airing_today' element={<Media format='tv' get='airing_today' title='TV Shows Airing Today' />} />
        <Route path='on_tv' element={<Media format='tv' get='on_the_air' title='Currently Airing TV Shows' />} />
        <Route path='top_rated' element={<Media format='tv' get='top_rated' title='Top Rated TV Shows' />} />
        <Route index element={<Media format='tv' get='popular' title='Popular TV Shows' />} />
      </Route>

      <Route path='/people' element={<Layout />}>
        <Route path='popular_people' element={<People />} />
        <Route path='person/:id' element={<PersonInformation />} />
        <Route index element={<People />} />
      </Route>

      <Route path='/search' element={<Layout />}>
        <Route index element={<ResultsPage />} />
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
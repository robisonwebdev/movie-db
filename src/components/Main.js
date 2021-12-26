import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Collection from '../components/Overview/Collection/Collection';
import Company from '../components/Overview/Company/Company';
import Home from './Home/Home';
import Keyword from '../components/Overview/Keyword/Keyword';
import Media from './Media/Media';
import Movie from '../components/Overview/Movie/Movie';
import People from './People/People';
import Person from '../components/Overview/Person/Person';
import ResultsPage from './Search/ResultsPage';
import Show from './Overview/Show/Show';
import '../styles/Main.css';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='/collection' element={<Layout />}>
        <Route path=':id' element={<Collection />}/>
      </Route>

      <Route path='/company' element={<Layout />}>
        <Route path=':id' element={<Company />}/>
      </Route>

      <Route path='/keyword' element={<Layout />}>
        <Route path=':id' element={<Keyword />}/>
      </Route>

      <Route path='/movies' element={<Layout />}>
        <Route path='popular' element={<Media format='movie' get='popular' title='Popular Movies' />} />
        <Route path='now_playing' element={<Media format='movie' get='now_playing' title='Now Playing Movies' />} />
        <Route path='upcoming' element={<Media format='movie' get='upcoming' title='Upcoming Movies' />} />
        <Route path='top_rated' element={<Media format='movie' get='top_rated' title='Top Rated Movies' />} />
        <Route index element={<Media format='movie' get='popular' title='Popular Movies' />} />
      </Route>

      <Route path='/movie' element={<Layout />}>
        <Route path=':id' element={<Movie />} />
      </Route>

      <Route path='/people' element={<Layout />}>
        <Route path='popular_people' element={<People />} />
        <Route index element={<People />} />
      </Route>

      <Route path='/person' element={<Layout />}>
        <Route path=':id' element={<Person />} />
      </Route>

      <Route path='/search' element={<Layout />}>
        <Route path=':searchParam' element={<ResultsPage />} />
        <Route index element={<ResultsPage />} />
      </Route>

      <Route path='/shows' element={<Layout />}>
        <Route path='popular' element={<Media format='tv' get='popular' title='Popular TV Shows' />} />
        <Route path='airing_today' element={<Media format='tv' get='airing_today' title='TV Shows Airing Today' />} />
        <Route path='on_tv' element={<Media format='tv' get='on_the_air' title='Currently Airing TV Shows' />} />
        <Route path='top_rated' element={<Media format='tv' get='top_rated' title='Top Rated TV Shows' />} />
        <Route index element={<Media format='tv' get='popular' title='Popular TV Shows' />} />
      </Route>

      <Route path='tv' element={<Layout />}>
        <Route path=':id' element={<Show />} />
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
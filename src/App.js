import React from 'react';
import Header from './components/Navigation/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div id='App'>
      <Header />
      <Main />
      <Footer
        address='https://github.com/robisonwebdev'
        name='David Robison'
        text='Recreated by '
      />
    </div>
  );
}

export default App;
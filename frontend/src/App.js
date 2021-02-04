import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Routes from './routes'



function App() {
  return (
      <BrowserRouter>
        <div>
          <header><Header /></header>
          <main>
            <Routes />
          </main>
          <footer className="mt-5"><Footer /></footer>
        </div>
      </BrowserRouter>
  );
}

export default App;

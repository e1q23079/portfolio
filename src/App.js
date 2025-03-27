import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './component/Navigation/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home/Home';

import Md from './component/Md/Md';

import { getAbout, getWorks, getLinks, getProducts } from './component/mdDt';

import NotFound from './component/NotFound/NotFound';

import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  const today = new Date();

  const year = today.getFullYear();

  return (
    <>
      <header>
        <Navigation />
      </header>
      <AnimatePresence>
        <Routes location={location} key={location.hash}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<Md text={getAbout()} />} />
          <Route exact path='/works' element={<Md text={getWorks()} />} />
          <Route exact path='/products' element={<Md text={getProducts()} />} />
          <Route exact path='/links' element={<Md text={getLinks()} />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
        <footer>
          <div className='copyRight'>© 2025-{year} Q23079 All Rights Reserved.</div>
        </footer>
      </AnimatePresence>
    </>
  );
};

export default App;

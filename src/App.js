import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Navigation from './component/Navigation/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home/Home';

import Md from './component/Md/Md';

import {getAbout,getWorks,getLinks, getProducts} from './component/mdDt';

import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<Md text={getAbout()}/>} />
          <Route exact path='/works' element={<Md text={getWorks()}/>} />
          <Route exact path='/products' element={<Md text={getProducts()}/>} />
          <Route exact path='/links' element={<Md text={getLinks()}/>} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

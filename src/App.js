import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Navigation from './component/Navigation/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

import Top from './component/Top/Top';

import Md from './component/Md/Md';

import {getAbout,getWorks,getLinks, getProducts} from './component/mdDt';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Top />} />
          <Route exact path='/about' element={<Md text={getAbout()}/>} />
          <Route exact path='/works' element={<Md text={getWorks()}/>} />
          <Route exact path='/products' element={<Md text={getProducts()}/>} />
          <Route exact path='/links' element={<Md text={getLinks()}/>} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

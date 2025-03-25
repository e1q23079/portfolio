import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Navigation from './component/head/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

import Top from './component/Top/Top';

import Md from './component/Md/Md';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Top />} />
          <Route exact path='/about' element={<Md />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

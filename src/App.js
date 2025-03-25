import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Navigation from './component/head/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

import Top from './component/Top/Top';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Top />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

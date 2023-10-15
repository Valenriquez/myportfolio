import logo from './logo.svg';
import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import {BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cv from './components/cv/Cv';

function App() {
  return (
    <> 
    <React.Fragment> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
 
    </>
  );
}

export default App;
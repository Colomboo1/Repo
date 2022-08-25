import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "./styles/styles/App.scss"

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavBar from './component/NavBar';
import Animation from "./component/Animation";
import SelfieGif from './component/SelfieGif';

const App= () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='image-block'>
          <div className='image'>
          </div>
          <div className='block'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} /> 
            </Routes>  
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

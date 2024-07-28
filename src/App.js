import React from 'react';
import './App.css'; // Import your CSS file for styling
import { HashRouter, Route, Routes } from 'react-router-dom';
import Music from './Music';
import Home from './Home';
import Thoughts from './Thoughts';

function App() {
  return (
    <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/thoughts" element={<Thoughts/>} />
          </Routes>
    </HashRouter>
  );
}

export default App;

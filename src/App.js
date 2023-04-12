import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

import React from 'react';
// import './style.css';
import { Routes, Route } from 'react-router';

import { Home } from './pages';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </div>
  );
}

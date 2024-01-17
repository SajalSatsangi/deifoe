// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed from Switch to Routes
import Home from './Page/Home';
import Departments from './Page/Departments';
import Programmes from './Page/Programmes';

const App = () => {
  return (
    <Router>
      <Routes> {/* Changed from Switch to Routes */}
        <Route path="/departments" element={<Departments />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/" element={<Home />} />
      </Routes> {/* Changed from Switch to Routes */}
    </Router>
  );
};

export default App;

import logo from './logo.svg';
import React from 'react';
import './App.css';
import Konten from './component/indexComponent/Konten1';
import Navigasi from './component/indexComponent/navigasi';
import Katalog from './pages/Katalog';
import FilterInsta from './pages/FilterInsta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      {/* <Navigasi /> */}
      <Routes>
        <Route path="/" element={<Konten />} />
        <Route path="/home" element={<Katalog />} />
        <Route path="/FilterInsta" element={<FilterInsta />} />
        {/* Rute lainnya jika ada */}
      </Routes>
    </Router>
  );
}

export default App;

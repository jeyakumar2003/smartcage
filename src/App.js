import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/header/Navigation';
import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contactus from './components/contact/Contactus';

function App() {
  return (
    <>
    <Router>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/OurServices';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <Navbar />
      <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
    </>
  );
}

export default App;

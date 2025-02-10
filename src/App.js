import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ServicesPage from './components/ServicePage';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicePage" element={<ServicesPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* Footer appears below all routes */}
      <Footer />
    </Router>
  );
}

export default App;
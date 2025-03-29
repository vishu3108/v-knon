import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Ensure it's false initially

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth < 768 ? 30 : 50; // Lower threshold for mobile
      setScroll(window.scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close
  };

  return (
    <nav className={`navbar ${scroll ? 'navbar-scroll' : ''}`}>
      {/* Left-side Navbar Links (Hidden on Mobile) */}
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/services">Services</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>

      {/* Website Title (V-Knon Marketing) */}
      <div className="site-title">Digital Sarthi</div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {/* Close Button (Moved to Left) */}
        <div className="close-icon" onClick={toggleMenu}>✖</div>

        <ul className="nav-links-sidebar">
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

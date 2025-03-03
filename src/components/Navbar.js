import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'; // Import the external CSS file

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50); // Changes style when scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scroll ? 'navbar-scroll' : ''}`}>
      {/* Left Navigation Links */}
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/services">Services</Link> {/* New Link for Services */}
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

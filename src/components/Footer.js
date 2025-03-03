import React from 'react';
import '../CSS/Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link" href="/about">Our Story</a></li> 
            <li className="footer-item"><a className="footer-link" href="/contact">Contact Us</a></li>
            <li className="footer-item"><a className="footer-link" href="/testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
          <li className="footer-item"><a className="footer-link" href="/">Home</a></li>
            <li className="footer-item"><a className="footer-link" href="/services">Services</a></li> {/* Example: Add valid hrefs */}
            <li className="footer-item"><a className="footer-link" href="/projects">Projects</a></li>
            <li className="footer-item"><a className="footer-link" href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="footer-list">
            <li className="footer-item">
             Ruppayan, Oriental Bank Lane,<br />Aundh, Pune
            </li>
            <li className="footer-item">Email: v-knonmarketing@gmail.com</li> {/* No href needed for email (consider mailto:) */}
            <li className="footer-item">Phone: 9156541988</li> {/* No href needed for phone */}
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <a className="social-icon-link" href="https://www.facebook.com/share/163ir4ojSJ/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a> {/* Valid hrefs */}
        <a className="social-icon-link" href="https://www.instagram.com/digital_vishal31?igsh=MWZucTdqdWNkbDdzag==/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a className="social-icon-link" href="www.linkedin.com/in/vishal--patil/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      <p className="footer-copyright">&copy; 2024 V-Knon Marketing. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
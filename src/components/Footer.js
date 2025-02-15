import React from 'react';
import '../CSS/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link" href="/about">Our Story</a></li> {/* Example: Add valid hrefs */}
            <li className="footer-item"><a className="footer-link" href="/mission">Our Mission</a></li>
            <li className="footer-item"><a className="footer-link" href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link" href="/services">Services</a></li> {/* Example: Add valid hrefs */}
            <li className="footer-item"><a className="footer-link" href="/products">Products</a></li>
            <li className="footer-item"><a className="footer-link" href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="footer-list">
            <li className="footer-item">123 Main Street, Anytown</li> {/* No href needed for address */}
            <li className="footer-item">Email: info@example.com</li> {/* No href needed for email (consider mailto:) */}
            <li className="footer-item">Phone: (123) 456-7890</li> {/* No href needed for phone */}
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <a className="social-icon-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a> {/* Valid hrefs */}
        <a className="social-icon-link" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a className="social-icon-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a className="social-icon-link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      <p className="footer-copyright">&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Nithin Gowda B.S.</h3>
            <p>Undergraduate Researcher</p>
            <p className="footer-tagline">Translational Diagnostics & Biosensors</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="hero" smooth={true} duration={500} className="footer-link">Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="footer-link">About</Link></li>
              <li><Link to="experience" smooth={true} duration={500} className="footer-link">Research</Link></li>
              <li><Link to="publications" smooth={true} duration={500} className="footer-link">Publications</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Nithin Gowda B.S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

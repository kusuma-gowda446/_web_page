import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Research', to: 'experience' },
    { name: 'Publications', to: 'publications' },
    { name: 'Impact', to: 'impact' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="hero" smooth={true} duration={500} offset={-70}>
            Nithin Gowda B.S.
          </Link>
        </div>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="mobile-menu-btn mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav glass">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="theme-toggle mobile-theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? (
              <><Sun size={20} /> Light Mode</>
            ) : (
              <><Moon size={20} /> Dark Mode</>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

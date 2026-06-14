import React, { useState } from 'react';
import { Download, Mail, Phone, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="hero" className="hero-section">
      {/* Animated background elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h2 className="hero-subtitle">Undergraduate Researcher</h2>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Nithin Gowda B.S.</span>
          </h1>
          <div className="hero-focus glass">
            <h3>Research Focus:</h3>
            <ul>
              <li>MOF-Based Electrochemical Biosensing</li>
              <li>Cancer Biomarker Detection</li>
              <li>Heavy Metal Monitoring</li>
              <li>Point-of-Care Diagnostics</li>
            </ul>
          </div>
          <p className="hero-intro">
            Passionate undergraduate researcher working at the intersection of materials chemistry, electrochemical sensing, and biomedical diagnostics. My research focuses on developing advanced metal-organic framework (MOF)-based platforms for sensitive and affordable detection of disease biomarkers and environmental contaminants.
          </p>
          <div className="hero-cta" style={{ position: 'relative' }}>
            <a href="/Nithin_Gowda_CV.pdf" download="Nithin_Gowda_CV.pdf" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              <Download size={20} />
              Download CV
            </a>
            
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button className="btn btn-outline" onClick={() => setShowContact(!showContact)}>
                <Mail size={20} />
                Contact Me
              </button>
              
              {showContact && (
                <div className="contact-dropdown glass animate-fade-in" style={{ position: 'absolute', top: '100%', left: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', borderRadius: '8px', zIndex: 10 }}>
                  <a href="mailto:nithin@example.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem' }}><Mail size={16}/> Email</a>
                  <a href="tel:+1234567890" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem' }}><Phone size={16}/> Phone</a>
                  <a href="https://www.linkedin.com/in/nithin-gowda-b-s-33b971360/?skipRedirect=true" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem' }}><Globe size={16}/> LinkedIn</a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image glass">
            {/* Placeholder for professional image */}
            <div className="image-placeholder">
              <span>Professional Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

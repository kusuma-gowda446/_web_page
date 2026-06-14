import React from 'react';
import { BookOpen, GraduationCap, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text glass">
            <p>
              I am a dedicated undergraduate student with a profound interest in the intersection of materials chemistry and biomedical diagnostics. My academic journey is fueled by a commitment to developing innovative solutions for pressing global healthcare challenges.
            </p>
            <p>
              My core research interests lie in <strong>translational diagnostics</strong> and <strong>biosensors</strong>, specifically focusing on the design and application of metal-organic frameworks (MOFs) and novel nanocomposites. I am driven by the potential of these materials to create highly sensitive, affordable, and accessible diagnostic tools.
            </p>
            <p>
              Looking forward, my long-term goal is to pursue a Ph.D. in Materials Science or Biomedical Engineering. I aspire to contribute to the next generation of global healthcare technologies, making early disease detection and environmental monitoring a reality for communities worldwide.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="about-card glass">
              <GraduationCap className="card-icon" size={32} />
              <h3>Education</h3>
              <p className="card-primary">B.Sc. in Chemistry & Zoology</p>
              <p className="card-secondary">CHRIST (Deemed to be University), Bangalore</p>
              <p className="card-secondary" style={{ fontStyle: 'italic', color: 'var(--accent-color)', fontWeight: 500, margin: '0.25rem 0 0.5rem' }}>UNDERGRADUATE RESEARCHER / RESEARCH AND DEVELOPMENT</p>
              <p className="card-highlight">GPA: 3.3 / 4.0</p>
              <p className="card-date">2024 - 2027 (Expected)</p>
            </div>
            
            <div className="about-card glass">
              <BookOpen className="card-icon" size={32} />
              <h3>Previous Education</h3>
              <p className="card-primary">Pre-University Certificate (12th Grade)</p>
              <p className="card-secondary">Sarvodaya PU College</p>
              <p className="card-highlight">Score: 89%</p>
              <p className="card-date">2024</p>
            </div>

            <div className="about-card glass">
              <Target className="card-icon" size={32} />
              <h3>Career Path</h3>
              <p className="card-primary">Research & Development</p>
              <p className="card-secondary">Focused on translating laboratory discoveries into point-of-care clinical tools.</p>
            </div>

            <div className="about-card glass">
              <Award className="card-icon" size={32} />
              <h3>Professional Memberships</h3>
              <p className="card-primary">Royal Society of Chemistry (RSC)</p>
              <p className="card-secondary">Student Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

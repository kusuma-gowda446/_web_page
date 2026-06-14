import React, { useState } from 'react';
import { Microscope, Beaker, Zap, Leaf, X, ChevronRight } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 'cancer-biomarker',
    title: 'Electrochemical Cancer Biomarker Detection',
    role: 'Lead Undergraduate Researcher',
    date: '2025 – Present',
    supervisor: 'Dr. Priya Vijayaraghavan (DBT Ramalingaswami Re-entry Fellow)',
    funding: 'DBT-funded project (₹89 Lakhs)',
    icon: <Microscope size={32} />,
    image: '/cancer_biomarker_sensor.png',
    details: 'This project focuses on the development of novel Fe-Ni bimetallic Metal-Organic Frameworks (MOFs) and conducting polymer nanocomposites. These materials are engineered to exhibit highly specific electrocatalytic activity towards targeted cancer biomarkers. By utilizing carbon cloth as a flexible and highly conductive substrate, we aim to fabricate a robust, point-of-care diagnostic tool. The research involves extensive material characterization using SEM, XRD, FTIR, and UV-Vis spectroscopy, alongside electrochemical evaluations via Cyclic Voltammetry (CV) and Electrochemical Impedance Spectroscopy (EIS).',
    points: [
      'Developed Fe-Ni bimetallic MOF/conducting polymer composites',
      'Fabricated carbon cloth-based electrochemical sensors',
      'Performed SEM, XRD, FTIR, UV-Vis, CV, and EIS characterization',
      'Manuscript in preparation'
    ]
  },
  {
    id: 'hormone-glucose',
    title: 'Hormone & Glucose Sensing',
    role: 'Self-Initiated Research',
    date: '2025 – Present',
    supervisor: 'Dr. Priya Vijayaraghavan | CHRIST University | Self-initiated with supervisor approval',
    funding: 'Self-Initiated',
    icon: <Beaker size={32} />,
    image: '/hormone_glucose_sensor.png',
    details: 'Expanding upon our MOF platform, this independent initiative explores the detection of critical metabolic and reproductive biomarkers. We are developing highly sensitive assays for Anti-Mullerian Hormone (AMH), dopamine, and glucose. The project demonstrates the versatility of the synthesized MOF nanocomposites and aims to provide non-invasive, rapid testing capabilities for endocrinological and metabolic disorders.',
    points: [
      'Extended the MOF platform for AMH detection',
      'Developed methods for dopamine sensing',
      'Created efficient glucose monitoring platforms',
      'Demonstrated broad applicability of the MOF platform'
    ]
  },
  {
    id: 'heavy-metal',
    title: 'Heavy Metal & Rare Earth Metal Detection',
    role: 'Self-Initiated Research',
    date: '2025 – Present',
    supervisor: 'Dr. Priya Vijayaraghavan | CHRIST University | Self-initiated with supervisor approval',
    funding: 'Environmental Monitoring Focus',
    icon: <Zap size={32} />,
    image: '/heavy_metal_sensor.png',
    details: 'Addressing the critical need for environmental monitoring, this research develops electrochemical sensors capable of detecting trace levels of toxic heavy metals (like Lead and Cadmium) and rare earth elements. We have synthesized various MOF structures, including Co-Ni and Co-Cu, and evaluated their performance across different electrode substrates such as metal foams and carbon cloth to optimize sensitivity and limit of detection.',
    points: [
      'Synthesized Fe-Ni, Co-Ni, and Co-Cu MOFs',
      'Designed sensors for Pb, Cd, and rare earth elements',
      'Evaluated multiple electrode substrates (carbon cloth, metal foams)',
      'Aimed at affordable environmental monitoring applications'
    ]
  },
  {
    id: 'biochar',
    title: 'Biochar-Based Electrochemical Sensing',
    role: 'Undergraduate Researcher',
    date: '2025 (45 days)',
    supervisor: 'Dr. Anitha Varghese (HOD, Stanford Top 2% Researcher) | CHRIST University',
    funding: 'Sustainable Materials Approach',
    icon: <Leaf size={32} />,
    image: '/biochar_sensor.png',
    details: 'Promoting a circular economy in diagnostic materials, this project utilizes biochar derived from agricultural waste (pineapple leaves). This sustainable carbonaceous material serves as an excellent conductive matrix for electrochemical sensing. We successfully developed a sensor for the detection of Laccase using carbon fiber paper electrodes, highlighting the potential of green chemistry in advanced biosensor development.',
    points: [
      'Utilized pineapple leaf waste-derived biochar',
      'Developed sensors for Laccase detection',
      'Utilized carbon fiber paper electrodes',
      'Promoted a sustainable and circular economy approach in biosensing'
    ]
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Research Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card glass">
              <div className="exp-icon-wrapper">
                {exp.icon}
              </div>
              <div className="exp-content">
                <h3>{exp.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <p className="exp-role" style={{ margin: 0 }}>{exp.role}</p>
                  {exp.date && <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{exp.date}</p>}
                </div>
                {exp.supervisor && <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>Supervisor: {exp.supervisor}</p>}
                <span className="badge exp-funding">{exp.funding}</span>
                <ul className="exp-points">
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <button 
                  className="btn btn-outline" 
                  style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                  onClick={() => setSelectedExp(exp)}
                >
                  View Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExp && (
        <div className="exp-modal-overlay animate-fade-in" onClick={() => setSelectedExp(null)}>
          <div className="exp-modal-content glass" onClick={e => e.stopPropagation()}>
            <button className="exp-modal-close" onClick={() => setSelectedExp(null)}>
              <X size={24} />
            </button>
            <div className="exp-modal-body">
              <div className="exp-modal-image">
                <img src={selectedExp.image} alt={selectedExp.title} />
              </div>
              <div className="exp-modal-info">
                <h2>{selectedExp.title}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <p className="exp-role" style={{ margin: 0, fontSize: '1.1rem' }}>{selectedExp.role}</p>
                  {selectedExp.date && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{selectedExp.date}</p>}
                </div>
                {selectedExp.supervisor && <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Supervisor: {selectedExp.supervisor}</p>}
                
                <p className="exp-modal-desc">{selectedExp.details}</p>
                
                <span className="badge exp-funding">{selectedExp.funding}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;

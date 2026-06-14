import React from 'react';
import { Quote } from 'lucide-react';
import './References.css';

const referencesData = [
  {
    id: 1,
    name: 'Dr. Priya Vijayaraghavan R',
    role: 'Faculty',
    institution: 'CHRIST University',
    highlight: 'DBT Ramalingaswami Re-entry Fellow',
    image: '/priya.jpg'
  },
  {
    id: 2,
    name: 'Dr. Anitha Varghese',
    role: 'Head of Department, Sciences',
    institution: 'CHRIST University',
    highlight: 'Stanford Top 2% Researcher',
    image: '/anitha.jpg'
  },
  {
    id: 3,
    name: 'Dr. Vinod T.P.',
    role: 'Faculty',
    institution: 'CHRIST University',
    highlight: 'Stanford Top 2% Scientist',
    image: '/vinod.jpg'
  }
];

const References = () => {
  return (
    <section id="references" className="references-section">
      <div className="container">
        <h2 className="section-title">References & Letters of Recommendation</h2>
        <div className="references-grid">
          {referencesData.map(ref => (
            <div key={ref.id} className="reference-card glass">
              <div className="ref-icon" style={{ overflow: 'hidden', padding: ref.image ? 0 : undefined }}>
                {ref.image ? (
                  <img src={ref.image} alt={ref.name} className="ref-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <Quote size={28} />
                )}
              </div>
              <div className="ref-content">
                <h3 className="ref-name">{ref.name}</h3>
                <p className="ref-role">{ref.role}</p>
                <p className="ref-institution">{ref.institution}</p>
              </div>
              {ref.highlight && (
                <div className="ref-highlight-col">
                  <span className="badge ref-highlight">{ref.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;

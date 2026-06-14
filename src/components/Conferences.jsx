import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import './Conferences.css';

const conferencesData = [
  {
    id: 1,
    name: 'SAINTS 2026',
    fullName: 'Scientific Advances in Natural and Technological Sciences',
    date: 'January 2026',
    location: 'CHRIST University, Bangalore',
    type: 'International Conference',
    role: 'Poster Presentation'
  },
  {
    id: 2,
    name: 'AMEEBA-2026',
    fullName: 'Advanced Materials for Energy, Environment and Biomedical Applications',
    date: 'May 2026',
    location: 'JSS Academy of Technical Education, Bengaluru',
    type: 'National Conference',
    role: 'Poster Presentation'
  },
  {
    id: 3,
    name: 'NCURB 2025',
    fullName: 'National Conference for Undergraduate Research in Biosciences',
    date: 'December 2025',
    location: 'Indian Institute of Science Education and Research (IISER), Tirupati',
    type: 'National Conference',
    role: 'Poster Presentation'
  }
];

const Conferences = () => {
  return (
    <section id="conferences" className="conferences-section">
      <div className="container">
        <h2 className="section-title">Conferences & Presentations</h2>
        
        <div className="timeline">
          {conferencesData.map((conf, index) => (
            <div key={conf.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <div className="conf-header">
                  <h3>{conf.name}</h3>
                  <span className="badge">{conf.type}</span>
                </div>
                <p className="conf-full-name">{conf.fullName}</p>
                <div className="conf-details">
                  <span><Calendar size={16} /> {conf.date}</span>
                  <span><MapPin size={16} /> {conf.location}</span>
                </div>
                <div className="conf-role">{conf.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;

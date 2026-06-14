import React from 'react';
import { Activity, ShieldAlert, Cpu, Layers, Dna, ActivitySquare, PlusSquare, Network } from 'lucide-react';
import './Interests.css';

const interests = [
  { name: 'Electrochemical Biosensors', icon: <Activity /> },
  { name: 'Cancer Diagnostics', icon: <ActivitySquare /> },
  { name: 'Point-of-Care Technologies', icon: <PlusSquare /> },
  { name: 'Nanomaterials', icon: <Layers /> },
  { name: 'Metal-Organic Frameworks', icon: <Network /> },
  { name: 'Environmental Monitoring', icon: <ShieldAlert /> },
  { name: 'Biomedical Devices', icon: <Cpu /> },
  { name: 'Translational Research', icon: <Dna /> }
];

const Interests = () => {
  return (
    <section id="interests" className="interests-section">
      <div className="container">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card glass">
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-name">{interest.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

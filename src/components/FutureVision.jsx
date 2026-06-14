import React from 'react';
import { Eye } from 'lucide-react';
import './FutureVision.css';

const FutureVision = () => {
  return (
    <section id="vision" className="vision-section">
      <div className="container">
        <div className="vision-content glass">
          <div className="vision-icon">
            <Eye size={48} />
          </div>
          <h2 className="vision-title">Future Research Vision</h2>
          <p className="vision-text">
            "My long-term vision is to develop affordable, highly sensitive diagnostic platforms capable of transforming healthcare accessibility in resource-limited settings through advanced electrochemical biosensing technologies."
          </p>
          <div className="vision-decoration">
            <div className="vision-line"></div>
            <div className="vision-dot"></div>
            <div className="vision-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;

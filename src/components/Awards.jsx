import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import './Awards.css';

const Awards = () => {
  return (
    <section id="awards" className="awards-section">
      <div className="container">
        <h2 className="section-title">Awards & Achievements</h2>
        
        <div className="awards-grid">
          {/* Highlighted Award */}
          <div className="award-card highlight glass">
            <div className="award-icon highlight-icon">
              <Star size={40} />
            </div>
            <div className="award-content">
              <h3>Selected for GSI FAIR Research Program</h3>
              <p className="award-org">GSI Helmholtz Centre for Heavy Ion Research, Darmstadt, Germany</p>
              <p className="award-desc">
                Selected for one of the world's leading facilities for heavy ion physics and materials science research (unable to attend due to ongoing research commitments).
              </p>
            </div>
          </div>

          <div className="awards-subgrid">
            <div className="award-card glass">
              <div className="award-icon">
                <Trophy size={28} />
              </div>
              <div className="award-content">
                <h3>2nd Prize – Researcher's Day</h3>
                <p className="award-org">CHRIST University</p>
                <p className="award-desc">Poster: Monometallic MOF for Cancer Detection</p>
              </div>
            </div>

            <div className="award-card glass">
              <div className="award-icon">
                <Medal size={28} />
              </div>
              <div className="award-content">
                <h3>4th Place – National Science Day</h3>
                <p className="award-org">CHRIST University</p>
                <p className="award-desc">Poster: Fe-Ni MOF Biosensing Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

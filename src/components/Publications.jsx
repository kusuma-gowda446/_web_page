import React, { useState } from 'react';
import { ExternalLink, BookText } from 'lucide-react';
import './Publications.css';

const publicationsData = [
  {
    id: 1,
    title: 'Ambient Electrochemical Nitrogen Reduction to Ammonia: Catalyst Design, Selectivity Challenges, and Mechanistic Insights',
    authors: 'Gowda N., Shaju E.M., Vijayaraghavan P., Cherian A.R.',
    journal: 'Under Review',
    year: '2025',
    status: 'Under Review',
    type: 'Review Article',
    doi: '#'
  },
  {
    id: 2,
    title: 'CRISPR-Cas Integrated Electrochemical Biosensors: Mechanisms, Design Strategies, and Applications in Diagnostics, Environmental Monitoring, and Food Safety',
    authors: 'Gowda N., Udupa P., Vijayaraghavan P.',
    journal: 'Under Review',
    year: '2025',
    status: 'Under Review',
    type: 'Review Article',
    doi: '#'
  }
];

const Publications = () => {
  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2 className="section-title">Publications</h2>

        <div className="publications-list">
          {publicationsData.map(pub => (
            <div key={pub.id} className="publication-card glass">
              <div className="pub-icon">
                <BookText size={24} />
              </div>
              <div className="pub-content">
                <div className="pub-header">
                  <span className={`badge ${pub.status.toLowerCase().replace(' ', '-')}`}>
                    {pub.status}
                  </span>
                  <span className="pub-year">{pub.year}</span>
                </div>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <div className="pub-footer">
                  <span className="pub-journal">{pub.journal}</span>
                  <a href={pub.doi} className="pub-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> DOI
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

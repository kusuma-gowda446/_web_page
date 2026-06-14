import React, { useState, useEffect } from 'react';
import { Briefcase, FileText, Presentation, Award } from 'lucide-react';
import './ImpactDashboard.css';

const StatCard = ({ icon, value, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-card glass animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{typeof count === 'number' && count === parseInt(value) && value.includes('+') ? `${count}+` : count}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const ImpactDashboard = () => {
  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <h2 className="section-title">Research Impact</h2>
        <div className="impact-grid">
          <StatCard icon={<Briefcase size={32} />} value="4+" label="Active Research Projects" delay={0.1} />
          <StatCard icon={<FileText size={32} />} value="2" label="Publications Under Review" delay={0.2} />
          <StatCard icon={<Presentation size={32} />} value="3" label="Conference Presentations" delay={0.3} />
          <StatCard icon={<Award size={32} />} value="1" label="International Selection" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;

import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Materials Synthesis',
    skills: [
      { name: 'MOF Synthesis', level: 90 },
      { name: 'Biochar Synthesis', level: 85 },
      { name: 'Conducting Polymer Composites', level: 80 }
    ]
  },
  {
    title: 'Electrochemistry',
    skills: [
      { name: 'Cyclic Voltammetry', level: 95 },
      { name: 'Electrochemical Impedance Spectroscopy', level: 85 }
    ]
  },
  {
    title: 'Characterization',
    skills: [
      { name: 'SEM', level: 80 },
      { name: 'XRD', level: 85 },
      { name: 'FTIR', level: 90 },
      { name: 'UV-Vis', level: 95 }
    ]
  },
  {
    title: 'Software & Analysis',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'OriginPro', level: 90 }
    ]
  }
];

const SkillBar = ({ name, level, isVisible }) => {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
      </div>
      <div className="skill-bar-bg">
        <div 
          className="skill-bar-fill" 
          style={{ width: isVisible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category glass">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level} 
                    isVisible={isVisible} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

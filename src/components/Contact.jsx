import React from 'react';
import { Mail, Phone, MapPin, Link as LinkIcon, GraduationCap, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <p className="contact-intro">I am currently open to research collaborations, internship opportunities, and graduate program discussions.</p>
            
            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:nithingowdabs279@gmail.com">nithingowdabs279@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919448443305">+91 9448443305</a>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Kunigal, Tumkur, Karnataka 572130, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/nithin-gowda-b-s-33b971360/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><LinkIcon /></a>
              <a href="#" className="social-link" aria-label="Google Scholar"><GraduationCap /></a>
              <a href="#" className="social-link" aria-label="ORCID"><Globe /></a>
              <a href="#" className="social-link" aria-label="ResearchGate"><Globe /></a>
            </div>
          </div>

          <div className="contact-form glass">
            <h3>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Dr. Jane Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="jane.doe@university.edu" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Research Collaboration" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Dear Nithin..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

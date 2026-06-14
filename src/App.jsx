import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Conferences from './components/Conferences';
import Awards from './components/Awards';
import ImpactDashboard from './components/ImpactDashboard';
import Skills from './components/Skills';
import Interests from './components/Interests';
import FutureVision from './components/FutureVision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import References from './components/References';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on load
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="app-container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Experience />
      <ImpactDashboard />
      <Publications />
      <Conferences />
      <Awards />
      <Skills />
      <Interests />
      <FutureVision />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

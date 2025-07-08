import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';

function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'workexperience', 'education', 'certifications', 'contact'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero id="hero" activeSection={activeSection} />
      <About id="about" activeSection={activeSection} />
      <Projects id="projects" activeSection={activeSection} />
      <Skills id="skills" activeSection={activeSection} />
      <WorkExperience id="workexperience" activeSection={activeSection} />
      <Education id="education" activeSection={activeSection} />
      <Certifications id="certifications" activeSection={activeSection} />
      <Contact id="contact" activeSection={activeSection} />
    </div>
  );
}

export default Home; 
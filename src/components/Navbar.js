import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ activeSection, setActiveSection }) => {

  const handleClick = (id) => {
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>

      <ul className={styles['nav-links']}>
        <li><a href="#hero" className={activeSection === 'hero' ? styles.active : ''} onClick={() => handleClick('hero')}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? styles.active : ''} onClick={() => handleClick('about')}>About</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? styles.active : ''} onClick={() => handleClick('projects')}>Projects</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? styles.active : ''} onClick={() => handleClick('skills')}>Skills</a></li>
        <li><a href="#workexperience" className={activeSection === 'workexperience' ? styles.active : ''} onClick={() => handleClick('workexperience')}>Work Experience</a></li>
        <li><a href="#education" className={activeSection === 'education' ? styles.active : ''} onClick={() => handleClick('education')}>Education</a></li>
        <li><a href="#certifications" className={activeSection === 'certifications' ? styles.active : ''} onClick={() => handleClick('certifications')}>Certifications</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? styles.active : ''} onClick={() => handleClick('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

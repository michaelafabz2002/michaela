import React from 'react';
import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  return (
    <section id={id} className={`${styles.hero} ${isActive ? styles['animate-in'] : ''}`}>
      <img src="/pic.jpg" alt="Michaela Fabrigar" className={`${styles['profile-pic']} ${isActive ? styles['animate-in'] : ''}`} />
      <div className={styles['hero-content']}>
        <h2>Michaela Fabrigar</h2>
        <div className={styles['divider-line']}></div>
        <p className={styles['web-developer-title']}>WEB DEVELOPER</p>
        <div className={styles['social-icons']}>
          <a href="https://www.facebook.com/fabrigar.michaela" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.instagram.com/itsme._.kyla/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://github.com/michaelafabz2002" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

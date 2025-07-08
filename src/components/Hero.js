import React from 'react';
import styles from './Hero.module.css';

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
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import styles from './About.module.css';

const About = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  return (
    <section id={id} className={`${styles.about} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>About Me</h2>
      <div className={styles['about-content']}>
        <div className={styles['about-intro']}>
          <h3>Hello, I&apos;m Michaela!</h3>
          <p>
            I&apos;m a passionate and driven developer, constantly exploring new technologies and crafting innovative solutions. My journey in tech is fueled by curiosity and a desire to build impactful digital experiences. I believe in continuous learning and always strive to deliver high-quality, efficient, and user-centric applications.
          </p>
          <div className={styles['skill-boxes']}>
            <div className={styles['skill-box']}>
              <span role="img" aria-label="code">💻</span> CODING ENTHUSIAST
            </div>
            <div className={styles['skill-box']}>
              <span role="img" aria-label="mern">✨</span> INNOVATION SEEKER
            </div>
            <div className={styles['skill-box']}>
              <span role="img" aria-label="bug">🔍</span> PROBLEM SOLVER
            </div>
          </div>
        </div>
        <div className={styles['about-info-grid']}>
          <div className={styles['info-box']}>
            <span role="img" aria-label="journey">🚀</span>
            <h4>My Journey</h4>
            <p>Started with foundational coding, evolved into a dedicated full-stack development path, embracing new challenges with every project.</p>
          </div>
          <div className={styles['info-box']}>
            <span role="img" aria-label="passion">💡</span>
            <h4>My Passion</h4>
            <p>Love transforming complex ideas into elegant, functional, and aesthetically pleasing web applications.</p>
          </div>
          <div className={styles['info-box']}>
            <span role="img" aria-label="learning">📚</span>
            <h4>Continuous Learning</h4>
            <p>Always diving into new frameworks, languages, and best practices to stay ahead in the ever-evolving tech landscape.</p>
          </div>
          <div className={styles['info-box']}>
            <span role="img" aria-label="goals">🎯</span>
            <h4>Future Goals</h4>
            <p>Building scalable and robust solutions that contribute positively to user experience and business growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default About;
  
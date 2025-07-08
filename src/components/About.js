import React from 'react';
import styles from './About.module.css';

const About = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  return (
    <section id={id} className={`${styles.about} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>About Me</h2>
      <p>I'm a recent graduate with foundational knowledge in web design and hands-on experience gained through academic projects and internships. I am computer literate and demonstrate strong teamwork, problem-solving, time-management, and adaptability skills. Flexible and eager to take on new challenges, I am prepared to start a career and make meaningful contributions with commitment and drive.</p>
    </section>
  );
};
  
export default About;
  
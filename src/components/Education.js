import React from 'react';
import styles from './Education.module.css';

const Education = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  return (
    <section id={id} className={`${styles.education} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>Education</h2>
      <div className={styles['education-item']}>
        <h3>Bachelor of Science in Information Technology</h3>
        <p className={styles.university}>Central Philippine University</p>
        <p className={styles.duration}>2021-2025</p>
        <ul className={styles['achievements-list']}>
          <li>Dean's List, 1st Semester, 2021-22</li>
          <li>Vice President For External Affairs of ITSO (Information Technology Student Organization), 2022-2023</li>
          <li>Thesis Statement: Information and Operation Management System for Justines Cargo Services, GUI (Graphics User Interface Designer) 2018-2020</li>
        </ul>
      </div>
    </section>
  );
};

export default Education; 
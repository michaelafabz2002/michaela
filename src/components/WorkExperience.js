import React from 'react';
import styles from './WorkExperience.module.css';

const WorkExperience = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  return (
    <section id={id} className={`${styles['work-experience']} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>Work Experience</h2>

      <div className={styles['experience-item']}>
        <h3>Student Laboratory Assistant</h3>
        <div className={styles['company-duration-row']}>
          <div className={styles['company-info']}>
            <p className={styles.company}>Central Philippine University</p>
          </div>
          <span className={styles.durationTag}>2022-2024</span>
        </div>
        <ul className={styles['responsibilities-list']}>
          <li>Maintained a clean, organized workspace to promote a positive learning environment for all users.</li>
          <li>Diagnose and troubleshoot hardware, software, and network issues.</li>
          <li>Improved user satisfaction by providing timely technical assistance to faculty, staff, and students.</li>
        </ul>
      </div>

      <div className={styles['experience-item']}>
        <h3>Restaurant Staff</h3>
        <div className={styles['company-duration-row']}>
          <div className={styles['company-info']}>
            <p className={styles.company}>Pasay, Metro Manila, Philippines</p>
          </div>
          <span className={styles.durationTag}>2018-2019</span>
        </div>
        <ul className={styles['responsibilities-list']}>
          <li>Processed customer payments and balanced cash drawers.</li>
          <li>Served and assisted dinners by carrying plates of food and taking and delivering beverages.</li>
          <li>Enhanced customer satisfaction by providing attentive service and anticipating guest needs.</li>
        </ul>
      </div>

      <div className={styles['experience-item']}>
        <h3>Office Staff & Web Developer / IT Tech Support</h3>
        <div className={styles['company-duration-row']}>
          <div className={styles['company-info']}>
            <p className={styles.company}>Justine&apos;s Cargo Services</p>
            <p className={styles.role}>On the Job Training <span className={styles.duration}>(Feb - May 2025)</span></p>
            <p className={styles.role}>Part-Time <span className={styles.duration}>(June 16 - June 27, 2025)</span></p>
          </div>
        </div>
        <ul className={styles['responsibilities-list']}>
          <li>Developed an Information and Operation Management System for the company using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
          <li>Handled administrative tasks such as filing, data entry, and preparing documents.</li>
          <li>Provided support to other departments to ensure smooth daily operations.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience; 
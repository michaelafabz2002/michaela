import React, { useState } from 'react';
import styles from './Certifications.module.css';

const Certifications = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id={id} className={`${styles.certifications} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>Certifications</h2>
      <div className={styles['certifications-grid']}>
        <div className={styles['certification-card']}>
          <h3>CISCO Certification in Introduction to Internet of Things</h3>
          <p className={styles.issuer}>CISCO</p>
          <p className={styles.date}>June 2024</p>
          <button onClick={() => openModal('/iot.jpg')} className={styles.link}>View Certificate</button>
        </div>
        <div className={styles['certification-card']}>
          <h3>CISCO Certification in IT Essentials</h3>
          <p className={styles.issuer}>CISCO</p>
          <p className={styles.date}>June 2024</p>
          <button onClick={() => openModal('/itess.jpg')} className={styles.link}>View Certificate</button>
        </div>
        <div className={styles['certification-card']}>
          <h3>Certificate of Completion (On-The-Job Training)</h3>
          <p className={styles.issuer}>Justine's Cargo Services</p>
          <p className={styles.date}>May 2025</p>
          
        </div>
      </div>

      {selectedImage && (
        <div className={styles['modal-overlay']} onClick={closeModal}>
          <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside from closing */} 
            <img src={selectedImage} alt="Enlarged Certificate" className={styles['modal-image']} />
            <button onClick={closeModal} className={styles['modal-close-button']}>&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications; 
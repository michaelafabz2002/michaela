import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  return (
    <section id={id} className={`${styles.contact} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>Contact Me</h2>
      <div className={styles['contact-info']}>
        <p><strong>Phone:</strong> +63 9662974324</p>
        <p><strong>Email:</strong> fabrigarmichaela1@gmail.com</p>
        <p><strong>Address:</strong> 423 Cabugao Sur Pavia</p>
      </div>
      <div className={styles['contact-social-icons']}>
        <a href="https://www.facebook.com/fabrigar.michaela" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://www.instagram.com/itsme._.kyla/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://github.com/michaelafabz2002" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </section>
  );
};
  
export default Contact;
  
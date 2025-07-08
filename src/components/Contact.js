import React from 'react';
import styles from './Contact.module.css';

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
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required className={styles.input} />
        <input type="email" placeholder="Your Email" required className={styles.input} />
        <textarea placeholder="Your Message" required className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>Send</button>
      </form>
    </section>
  );
};
  
export default Contact;
  
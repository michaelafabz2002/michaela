import React, { useState } from 'react';
import styles from './Projects.module.css';

const projectData = [
  {
    title: 'Justine\'s Cargo Services Information and Operation System',
    media: '/jcs.png',
    description: 'A comprehensive web application built with MERN STACK that allows users to manage their cargo services and operations. This system is designed to increase efficiency and management of cargo services, operations, inventory, profiling, and more.',
    technologies: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'JavaScript' },
      { name: 'Chakra UI' },
    ],
  },
  {
    title: 'Portfolio Website',
    media: '/port.png',
    description: 'Built with React and hosted on GitHub Pages, this portfolio showcases my skills and projects.',
    technologies: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'CSS Modules' },
    ],
  },
  {
    title: 'Online Store Design',
    media: '/figma.png',
    description: 'Designed an online store UI/UX using Figma, focusing on user-friendly interface and modern aesthetics.',
    technologies: [
      { name: 'Figma' },
      { name: 'UI/UX Design' },
    ],
  },
];

const Projects = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projectData[currentProjectIndex];

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const goToPrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      (prevIndex - 1 + projectData.length) % projectData.length
    );
  };

  const goToProject = (index) => {
    setCurrentProjectIndex(index);
  };

  return (
    <section id={id} className={`${styles.projects} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>Projects</h2>
      <div className={styles['carousel-container']}>
        <div className={styles['carousel-media']}>
          {currentProject.media ? (
            <img src={currentProject.media} alt={currentProject.title} className={styles['project-image']} />
          ) : (
            <p className={styles['media-placeholder']}>Project Media Placeholder</p>
          )}
          <div className={styles['carousel-navigation']}>
            {projectData.map((_, index) => (
              <span
                key={index}
                className={`${styles['nav-dot']} ${index === currentProjectIndex ? styles.active : ''}`}
                onClick={() => goToProject(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className={styles['carousel-details']}>
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
          <h4>Technologies Used:</h4>
          <div className={styles['tech-tags']}>
            {currentProject.technologies.map((tech, index) => (
              <span key={index} className={styles['tech-tag']}>
                {/* {tech.icon && <img src={tech.icon} alt={tech.name} className={styles['tech-icon']} />} */}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Projects;
  
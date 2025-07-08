import React, { useState } from 'react';
import styles from './Skills.module.css';

const skillsData = [
  {
    key: 'web',
    label: 'WEB',
    content: (
      <div key="web-skills" className={styles['skills-content-inner']}>
        <h3>MERN Stack</h3>
        <div className={styles['skill-cards-grid']}>
          <div className={styles['skill-card']}>
            <h4>MongoDB</h4>
            <span className={styles['skill-type']}>Database</span>
            <p>NoSQL database for flexible, scalable storage.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Express.js</h4>
            <span className={styles['skill-type']}>Backend</span>
            <p>Minimal, fast Node.js web framework.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>React</h4>
            <span className={styles['skill-type']}>Frontend</span>
            <p>Component-based UI library for dynamic apps.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Node.js</h4>
            <span className={styles['skill-type']}>Runtime</span>
            <p>JavaScript runtime for scalable server-side code.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Next.js</h4>
            <span className={styles['skill-type']}>Framework</span>
            <p>React framework for server-side rendering and static sites.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Chakra UI</h4>
            <span className={styles['skill-type']}>UI Library</span>
            <p>Accessible and customizable React component library.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'mobile',
    label: 'Mobile',
    content: (
      <div key="mobile-skills" className={styles['skills-content-inner']}>
        <h3>Mobile Development Skills</h3>
        <div className={styles['skill-cards-grid']}>
          <div className={styles['skill-card']}>
            <h4>Flutter</h4>
            <span className={styles['skill-type']}>Framework</span>
            <p>Open-source UI software development kit for building natively compiled applications for mobile, web, and desktop from a single codebase.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Firebase</h4>
            <span className={styles['skill-type']}>Backend-as-a-Service</span>
            <p>Google's mobile platform that helps you quickly develop high-quality apps and grow your business.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'desktop',
    label: 'Desktop',
    content: (
      <div key="desktop-skills" className={styles['skills-content-inner']}>
        <h3>Desktop Development</h3>
        <div className={styles['skill-cards-grid']}>
          <div className={styles['skill-card']}>
            <h4>C#</h4>
            <span className={styles['skill-type']}>Language</span>
            <p>Modern, versatile language for Windows apps.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>.NET Framework</h4>
            <span className={styles['skill-type']}>Framework</span>
            <p>Robust framework for building desktop solutions.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>MySQL</h4>
            <span className={styles['skill-type']}>Database</span>
            <p>Popular open-source relational database for desktop apps.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'uidesigns',
    label: 'UI Designs',
    content: (
      <div key="uidesigns-skills" className={styles['skills-content-inner']}>
        <h3>UI Design Tools</h3>
        <div className={styles['skill-cards-grid']}>
          <div className={styles['skill-card']}>
            <h4>Figma</h4>
            <span className={styles['skill-type']}>Design</span>
            <p>Collaborative interface design tool.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Wix</h4>
            <span className={styles['skill-type']}>Website Builder</span>
            <p>Drag-and-drop website creation platform.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'tools',
    label: 'Tools',
    content: (
      <div key="tools-skills" className={styles['skills-content-inner']}>
        <h3>Development Tools</h3>
        <div className={styles['skill-cards-grid']}>
          <div className={styles['skill-card']}>
            <h4>ChatGPT</h4>
            <span className={styles['skill-type']}>AI</span>
            <p>AI assistant for coding, writing, and brainstorming.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Cursor</h4>
            <span className={styles['skill-type']}>Editor</span>
            <p>AI-powered code editor for productivity.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Excalidraw</h4>
            <span className={styles['skill-type']}>Diagram</span>
            <p>Hand-drawn style diagrams and sketches.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>Lucidcharts</h4>
            <span className={styles['skill-type']}>Diagram</span>
            <p>Professional flowcharts and diagrams.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>GitHub</h4>
            <span className={styles['skill-type']}>Version Control</span>
            <p>Collaboration and code hosting platform for version control using Git.</p>
          </div>
          <div className={styles['skill-card']}>
            <h4>MongoDB Compass</h4>
            <span className={styles['skill-type']}>Database GUI</span>
            <p>Visual interface for exploring and manipulating MongoDB data.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'otherskills',
    label: 'Other Skills',
    content: (
      <div key="otherskills-skills" className={styles['skills-content-inner']}>
        <h3>Other Skills</h3>
        <div className={styles['skill-cards-grid']}>
          <div className={styles['skill-card']}><h4>Software Installation</h4></div>
          <div className={styles['skill-card']}><h4>Web Development</h4></div>
          <div className={styles['skill-card']}><h4>Software Development</h4></div>
          <div className={styles['skill-card']}><h4>Hardware Maintenance</h4></div>
          <div className={styles['skill-card']}><h4>Collaboration</h4></div>
          <div className={styles['skill-card']}><h4>Problem Solving</h4></div>
          <div className={styles['skill-card']}><h4>Flexibility</h4></div>
          <div className={styles['skill-card']}><h4>Adaptability</h4></div>
        </div>
      </div>
    ),
  },
];

const Skills = ({ id, activeSection }) => {
  const isActive = activeSection === id;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSkill = skillsData[currentIndex];

  const goToSkill = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id={id} className={`${styles.skills} ${isActive ? styles['animate-in'] : ''}`}>
      <h2>Skills</h2>
      <div className={styles['skills-carousel-container']}>
        <div className={styles['skills-carousel-content']}>
          {currentSkill.content}
        </div>
        <div className={styles['skills-carousel-navigation']}>
          {skillsData.map((skill, idx) => (
            <span
              key={skill.key}
              className={`${styles['nav-dot']} ${idx === currentIndex ? styles.active : ''}`}
              onClick={() => goToSkill(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
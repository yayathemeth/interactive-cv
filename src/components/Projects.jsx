// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">PROJEKTY</h2>
      <div className="projects-grid">
       <div className="project-card">
  <h3>Silverfox – Moon</h3>
  <p>
    Minimalistická aplikace, která zobrazuje mesíční fázi a znamení v realném čase. Designováno pro milovníky astrologie s retro-futuristickou estetikou.
  </p>
  <p className="stack">React · Vite · JavaScript · CSS</p>
  <div className="buttons">
    <a href="https://silverfox-moon.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
    <a href="https://github.com/yayathemeth/silverfox-moon" target="_blank" rel="noopener noreferrer">GitHub - frontend</a>
    <a href="https://github.com/yayathemeth/silverfox-moon-backend" target="_blank" rel="noopener noreferrer">GitHub - backend</a>
  </div>
</div>

        {/* Add more project-card blocks below as needed */}
      </div>
    </div>
  );
}

export default Projects;

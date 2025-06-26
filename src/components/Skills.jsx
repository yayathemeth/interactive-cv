// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="section-title">DOVEDNOSTI</h2>
      <div className="skills-columns">
        <div className="skills-group">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Backend</h3>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>Django REST</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skills-group">
          <h3>Nástroje</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>VS Code</li>
            <li>Adobe CC</li>
            <li>Blender</li>
            <li>Ableton Live</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

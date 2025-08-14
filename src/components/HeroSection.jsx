// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <h2 className="hero-name">JEAN TATY</h2>
      <p className="hero-subtitle">A FULL-STACK JUNIOR DEVELOPER</p>
      <p className="hero-tagline">Vytvářím elegantní a rychlé aplikace od nápadu až po realizaci.</p>
      <div className="hero-buttons">
        <a href="#projects">Zobrazit projekty</a>
        <a href="/cv.pdf" download>Download CV</a>
      </div>
    </section>
  );
}

export default HeroSection;

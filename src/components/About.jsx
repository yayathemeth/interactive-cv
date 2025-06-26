// src/components/About.jsx
import React from 'react';
import './About.css';
import avatar from '../assets/avatar.jpg'; // Placeholder image, add your file in /assets

function About() {
  return (
    <div className="about-container">
      <h2 className="section-title">BIO</h2>
      <div className="about-content">
        <img src={avatar} alt="Avatar" className="about-avatar" />
        <p className="about-text">
  Jsem beran – poháněn výzvami, kreativitou a odvážnými nápady. Vždycky jsem měl blízko k technologiím – moji rodiče provozují telekomunikační firmu – ale moje cesta byla velmi netypická. Pracoval jsem jako manažer v Manifestu v Praze a jako šéfredaktor místního vysílání v Ostrově, kde jsem získal praktické zkušenosti s vedením a komunikací.
  <br /><br />
  Nedávno jsem udělal odvážný krok: dokončil jsem rekvalifikační program na softwarového inženýra. Nyní se soustředím na budování silných základů jako full-stack vývojář s dlouhodobou vizí práce v oblasti umělé inteligence.

  <br /><br />
  Když neprogramuji, tvořím hudbu (vytvářím si vlastní beaty), maluji a jezdím na kole, abych si vyčistil mysl.
</p>

      </div>
    </div>
  );
}

export default About;

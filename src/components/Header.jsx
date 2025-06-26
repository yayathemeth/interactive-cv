import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">JEAN TATY</div>
      <nav className="nav">
        <a href="#about">BIO</a>
        <a href="#experience">Zkušenosti</a>
        <a href="#skills">Dovednosti</a>
        <a href="#projects">Projekty</a>
        <a href="#contact">Kontakt</a>
      </nav>
    </header>
  );
}

export default Header;

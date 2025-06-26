// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Jean Taty. Built with React + Vite.</p>
    </footer>
  );
}

export default Footer;

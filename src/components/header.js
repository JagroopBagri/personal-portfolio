import React from 'react';
import logo from '../images/initial-logo.jpg';

function Header() {
  return (
    <div className="header">
      <div className="brand">
        <img className="logo" src={logo} alt="logo" />
        <h1>Jagroop Bagri</h1>
      </div>
      <div className="personal-links">
        <a
          href="https://www.linkedin.com/in/jagroop-bagri-220481226"
          target="_blank"
          rel="noreferrer"
          className="personal-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/JagroopBagri"
          target="_blank"
          rel="noreferrer"
          className="personal-link"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Header;

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
        <p className="personal-link">LinkedIn</p>
        <p className="personal-link">GitHub</p>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import logo from '../images/initial-logo.jpg';

function Header() {
  return (
    <div className="header">
      <div className="brand">
        <img src={logo} alt="logo" />
        <h1>Jagroop Bagri</h1>
      </div>
      <div className="personal-links">
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </div>
  );
}

export default Header;

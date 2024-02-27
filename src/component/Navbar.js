import React from 'react';
import './Navbar.css';
import Logo from '../img/logo.png';
import AiData from '../component/AiData';
import Experience from '../component/Totalsites'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
      </div>
      <div className="navbar-links">
      <Experience totalSites={AiData.length} />

      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Hi, I'm Abdul Majeed, a frontend developer passionate about creating engaging and user-friendly websites. I've created this site as a collection of AI resources and information.</p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <address>
            <ul>
              <li>Whatsapp: 03113122509</li>
              <li>Address: Badah, Larkana Sindh Pakistan</li>
            </ul>
          </address>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className='footer-link'>
            <li><a href="https://www.linkedin.com/in/majeed-abro-0m7/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://web.facebook.com/MajeedAbro?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Majeed Abro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

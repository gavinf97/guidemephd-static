import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Guide Me PhD Ltd. Registered in England & Wales (Company No. 16154190).</p>
        <p>Gavin Farrell Consulting is a trading name of Guide Me PhD Ltd.</p>
        <p className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

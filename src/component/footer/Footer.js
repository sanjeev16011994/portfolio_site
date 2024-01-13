// src/components/Footer.js
import React from 'react';
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div  className='footer-container' >
      <p className='footer-text' >&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

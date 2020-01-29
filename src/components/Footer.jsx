import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__legal">
        &copy; 2020 by Daria Katysheva. All rights reserved. Powered by <a target="_blank" rel="noopener noreferrer" href="https://rawg.io/" className="footer__link">RAWG</a>.
      </div>
    </footer>
  );
}

export default Footer;

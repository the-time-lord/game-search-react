import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header(props) {

  return (
    <header className="header">
      <Link to="/">
        <div className="header__icon-box">
          <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
            <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/>
          </svg>
        </div>
      </Link>
      {props.children}
      <div className="header__icon-box">
        <svg className="header__icon header__icon--small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    </header>
  );
}

export default Header;
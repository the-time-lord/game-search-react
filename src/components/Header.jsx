import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Gamepad } from '../img/gamepad.svg';
import { ReactComponent as Heart } from '../img/favorite.svg'

function Header(props) {

  return (
    <header className="header">
      <Link to="/">
        <div className="header__icon-box">
          <Gamepad className="header__icon" />
        </div>
      </Link>
      {props.children}
      <div className="header__icon-box">
        <Heart className="header__icon header__icon--small" />
      </div>
    </header>
  );
}

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Heaeder.scss';

const Header = () => {
  return (
    <nav className="header">
      <h1 className="header__title">Currency Converter</h1>
      <ul className="header__links">
        <li className="header__link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="header__link">
          <NavLink to="/history-browser">Currency history</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

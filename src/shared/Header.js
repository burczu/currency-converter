import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Heaeder.scss';
import money from '../static/money.svg';

const Header = () => {
  return (
    <nav className="header">
      <h1 className="header__title">
        <Link to="/">
          <img src={money} alt="App logo - money" />
          Currency Converter
        </Link>
      </h1>
      <ul className="header__links">
        <li className="header__link">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink to="/history-browser">History</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

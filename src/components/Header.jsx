import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import logo from '../assets/statics/logo.png';
import userIcon from '../assets/statics/user.svg';

const Header = () => (
  <header className="header">
    <div className="header__brand">
      <Link to="/">
        <img className="header__img" src={logo} alt="Logo principal" />
      </Link>
      <h2>Video App</h2>
    </div>
    <section className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="Logo usuario" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a>Cuenta</a>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
      </ul>
    </section>
  </header>
);

export default Header;

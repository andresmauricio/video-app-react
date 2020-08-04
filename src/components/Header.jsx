import React from 'react';
import '../assets/styles/Header.scss'
import logo from '../assets/statics/logo.png'
import userIcon from '../assets/statics/user.svg'

const Header = () => (
  <header className="header">
    <div className="header__brand">
      <img className="header__img" src={logo} alt="Logo principal" />
      <h2>Video App</h2>
    </div>
    <section className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="Logo usuario" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="inicio-sesion.html">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </section>
  </header>
);

export default Header;

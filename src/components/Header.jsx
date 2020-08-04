import React from 'react';
import '../assets/styles/Header.scss'

const Header = () => (
  <header className="header">
    <div className="header__brand">
      <img className="header__img" src="assets/logo.png" alt="Logo principal" />
      <h2>Video App</h2>
    </div>
    <section className="header__menu">
      <div className="header__menu--profile">
        <img src="assets/user.svg" alt="Logo usuario" />
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

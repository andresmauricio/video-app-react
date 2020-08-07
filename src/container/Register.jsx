import React from 'react';
import '../assets/styles/Account.scss';
import { Link } from 'react-router-dom';

const Register = () => (
  <section className="login">
    <section className="login__container">
      <h2>Regístrate</h2>
      <form className="login__container--form">
        <input className="account--input" type="text" placeholder="nombre" />
        <input className="account--input" type="text" placeholder="correo" />
        <input
          className="account--input"
          type="password"
          placeholder="contraseña"
        />
        <button className="button">Registrarme</button>
      </form>
      <Link className="login__container--register" to="/login">
        Inciar Sesión
      </Link>
    </section>
  </section>
);

export default Register;

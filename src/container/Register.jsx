import React from 'react';
import '../assets/styles/Account.scss';

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
      <a className="login__container--register" href="inicio-sesion.html">
        Inciar Sesión
      </a>
    </section>
  </section>
);

export default Register;

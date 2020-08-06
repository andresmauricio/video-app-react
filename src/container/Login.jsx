import React from 'react';
import '../assets/styles/Account.scss';
import googleIcon from '../assets/statics/google-icon.webp';
import twitterIcon from '../assets/statics/twitter-icon.webp';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia Sesión</h2>
      <form className="login__container--form">
        <input className="account--input" type="text" placeholder="correo" />
        <input
          className="account--input"
          type="password"
          placeholder="contraseña"
        />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" name="" id="cbox1" value="checkbox" />
            Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Logo google" />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt="Logo twitter" />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        No tienes ningula cuenta <a href="registro.html">Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;

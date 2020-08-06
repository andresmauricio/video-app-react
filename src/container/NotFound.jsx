import React from 'react';
import '../assets/styles/NotFound.scss';

const NotFount = () => (
  <section className="not-found__container">
    <h2 className="not-found__title">404</h2>
    <p className="not-found__subtitle">
      Lo sentimos, el recurso que buscas no está disponoble
    </p>
    <a href="index.html">Regresar</a>
  </section>
);

export default NotFount;

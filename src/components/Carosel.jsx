import React from 'react';
import '../assets/styles/Carosel.scss';

const Carosel = ({ children }) => (
  <section className="carosel">
    <section className="carosel__container">{children}</section>
  </section>
);

export default Carosel;

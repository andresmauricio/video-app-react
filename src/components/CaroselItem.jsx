import React from 'react';
import '../assets/styles/CaroselItem.scss'

const CaroselItem = () => (
  <div className="carosel-item">
    <img
      className="carosel-item__img"
      src="https://images.pexels.com/photos/3021601/pexels-photo-3021601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Imagen pelicula"
    />
    <div className="carosel-item__details">
      <div>
        <img
          className="carosel-option"
          src="assets/play.png"
          alt="icono de play"
        />
        <img
          className="carosel-option"
          src="assets/plus.png"
          alt="icono de guardar"
        />
      </div>
      <p className="carosel-item__details--title">Titulo descriptivo</p>
      <p className="carosel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CaroselItem;

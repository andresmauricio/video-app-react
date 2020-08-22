import React from 'react';
import '../assets/styles/CaroselItem.scss';
import playButton from '../assets/statics/play.png';
import plusButton from '../assets/statics/plus.png';

const CaroselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carosel-item">
    <img className="carosel-item__img" src={cover} alt={title} />
    <div className="carosel-item__details">
      <div>
        <img className="carosel-option" src={playButton} alt="icono de play" />
        <img
          className="carosel-option"
          src={plusButton}
          alt="icono de guardar"
        />
      </div>
      <p className="carosel-item__details--title">{title}</p>
      <p className="carosel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CaroselItem;

import React from 'react';
import '../assets/styles/Categories.scss'

const Categories = ({ children }) => (
  <div className="categories">
    <h2 className="carosel-title">Tendencias</h2>
    {children}
  </div>
);

export default Categories;

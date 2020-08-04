import React from 'react';
import '../assets/styles/Categories.scss'

const Categories = ({ children, title }) => (
  <div className="categories">
    <h2 className="carosel-title">{title}</h2>
    {children}
  </div>
);

export default Categories;

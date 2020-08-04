import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carosel from '../components/Carosel';
import CaroselItem from '../components/CaroselItem';
import '../assets/styles/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
      <Carosel>
        <CaroselItem />
        <CaroselItem />
        <CaroselItem />
        <CaroselItem />
        <CaroselItem />
      </Carosel>
    </Categories>
  </div>
);

export default App;

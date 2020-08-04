import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carosel from '../components/Carosel';
import CaroselItem from '../components/CaroselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

const App = () => {
  const initialState = useInitialState  (API);
  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carosel>
            <CaroselItem />
          </Carosel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carosel>
          {initialState.trends.map(item => (
            <CaroselItem key={item.id} {...item} />
          ))}
        </Carosel>
      </Categories>

      <Categories title="Orginales de App">
        <Carosel>
          {initialState.originals.map(item => (
            <CaroselItem key={item.id} {...item} />
          ))}
        </Carosel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;

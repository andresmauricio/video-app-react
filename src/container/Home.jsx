import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carosel from '../components/Carosel';
import CaroselItem from '../components/CaroselItem';
import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

const Home = () => {
  const initialState = useInitialState  (API);
  return (
    <>
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

    </>
  );
};

export default Home;

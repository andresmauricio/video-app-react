import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carosel from '../components/Carosel';
import CaroselItem from '../components/CaroselItem';
import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3000/initalState' LLamado con Hooks

const Home = ({ mylist, trends, originals }) => {
  // const initialState = useInitialState  (API); Uso de Hooks custom
  return (
    <>
      <Search />

      {mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carosel>
            {mylist.map(item => (
              <CaroselItem key={item.id} {...item} />
            ))}
          </Carosel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carosel>
          {trends.map(item => (
            <CaroselItem key={item.id} {...item} />
          ))}
        </Carosel>
      </Categories>

      <Categories title="Orginales de App">
        <Carosel>
          {originals.map(item => (
            <CaroselItem key={item.id} {...item} />
          ))}
        </Carosel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.mylist,
    trends: state.trends,
    original: state.originals,
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
// export default Home;

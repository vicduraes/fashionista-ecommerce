import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ItensCount from '../../components/ItensCount/ItensCount';
import Card from '../../components/Card/Card';

import './Home.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <ItensCount totalCount="22" />
      <ScrollToTop />
      <h1 className="home">Catálogo</h1>
      <div className="container">
        <div className="catalog">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;

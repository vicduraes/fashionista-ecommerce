import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ItensCount from '../../components/ItensCount/ItensCount';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="home">HOME</h1>
      <ItensCount totalCount='22' />
      <ScrollToTop/>
      
    </>
  );
};

export default Home;

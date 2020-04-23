import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="home">HOME</h1>
      <ScrollToTop/>
    </>
  );
};

export default Home;

import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ItensCount from "../../components/ItensCount/ItensCount";
import Card from "../../components/Card/Card";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <ItensCount totalCount="22" />
        <ScrollToTop />
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
    </div>
  );
};

export default Home;

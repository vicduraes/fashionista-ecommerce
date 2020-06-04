import React, { useEffect, useState } from "react";

import api from "../../service/api";

import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ItensCount from "../../components/ItensCount/ItensCount";
import Card from "../../components/Card/Card";

import "./Home.scss";

const Home = () => {

  const [ data, setData ] = useState([]);

  useEffect(() => {

    const getAPI = async () => {
      await api.get('/').then(( { data } ) => {
        setData(data);
      });
    };

    getAPI();
    
  }, [])

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="container">
        <ItensCount totalCount={data.length} />
        <ScrollToTop />
        <div className="product-catalog">
          {data.map((product) => <Card product={product} />)}
        </div>
      </div>
    </>
  );
};

export default Home;

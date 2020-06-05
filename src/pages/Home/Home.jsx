import React, { useEffect, useState } from "react";

import api from "../../service/api";

import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ItensCount from "../../components/ItensCount/ItensCount";
import Card from "../../components/Card/Card";

import "./Home.scss";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      try {
        await api.get("/").then(({ data }) => {
          setData(data);
        });
      } catch (err) {
        setData([]);
      }
    };

    getAPI();
  }, []);

  const hasData = data.length > 0 ? true : false;

  return (
    <>
      <Navbar />
      <div className="container">
        {hasData ? (
          <>
            <ItensCount totalCount={data.length} />
            <ScrollToTop />
            <div className="product-catalog">
              {data.map((product) => (
                <Card product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="error-block">
            <span className="error-block__ops">Ops!</span>
            <span className="error-block__message">
               Ocorreu um erro inesperado. Tente novamente.
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

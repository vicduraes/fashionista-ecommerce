import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { getCatalog } from "../../store/actions/catalog";

import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ItensCount from "../../components/ItensCount/ItensCount";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


import "./Home.scss";

const Products = (props) => {
  const { catalog } = props;
  return (
    <>
      <ItensCount totalCount={catalog.length} />
      <ScrollToTop />
      <div className="product-catalog">
        {catalog.map((product) => (
          <Link
            to={{
              pathname: `/produto/${product.style}`,
              state: { id: product.style },
            }}
            style={{ textDecoration: "none" }}
          >
            <Card key={product.style} product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

const Catalog = (props) => {
  const { loading, error, catalog } = props;
  if (loading) return <Loading />;

  if (error) return <Error />;

  return <Products catalog={catalog} />;
};

const Home = () => {
  const { loading, catalog, error } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const getCatalogAction = useMemo(
    () => bindActionCreators(getCatalog, dispatch),
    [dispatch]
  );

  useEffect(() => {
    getCatalogAction();
  }, [getCatalogAction]);

  return (
    <>
      <Navbar showArrow={false}/>
      <div className="container">
        <Catalog catalog={catalog} error={error} loading={loading} />
      </div>
    </>
  );
};

export default Home;

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

import "./Home.scss";

const Home = () => {
  const { loading, catalog } = useSelector((state) => state.catalog);
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
      <Navbar />
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <ItensCount totalCount={catalog.length} />
            <ScrollToTop />
            <div className="product-catalog">
              {catalog.map((product, k) => (
                <Link
                  key={k}
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
        )}
        {/* // (
        //   <div className="error-block">
        //     <span className="error-block__ops">Ops!</span>
        //     <span className="error-block__message">
        //       Ocorreu um erro inesperado. Tente novamente.
        //     </span>
        //   </div>
        // ) */}
      </div>
    </>
  );
};

export default Home;

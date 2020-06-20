import React, { useEffect, useCallback } from "react";
import { useSelector, connect } from "react-redux";

import { GET_PRODUCT_REQUEST } from "../../store/actions/product";

import Navbar from "../../components/Navbar/Navbar";
import Detail from "../../components/Detail/Detail";
import Loading from "../../components/Loading/Loading";

const ProductDetail = ({ location, getProduct }) => {
  const { loading, product } = useSelector((state) => state.product);

  const getProductAction = useCallback(() => {
    getProduct(location.state.id);
  }, [location.state.id, getProduct]);

  useEffect(() => {
    getProductAction();
  }, [getProductAction]);

  return (
    <div className="product-detail">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Detail product={product} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getProduct: (payload) => dispatch({ type: GET_PRODUCT_REQUEST, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

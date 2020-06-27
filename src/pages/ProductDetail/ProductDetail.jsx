import React, { useEffect, useCallback } from "react";
import { useSelector, connect } from "react-redux";

import { GET_PRODUCT_REQUEST } from "../../store/actions/product";

import Navbar from "../../components/Navbar/Navbar";
import Detail from "../../components/Detail/Detail";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Details = (props) => {
  const { loading, error, product } = props;
  if (loading) return <Loading />;

  if (error) return <Error />;

  return <Detail product={product} />;
};

const ProductDetail = ({ location, getProduct }) => {
  const { loading, product, error } = useSelector((state) => state.product);

  const getProductAction = useCallback(() => {
    getProduct(location.state.id);
  }, [location.state.id, getProduct]);

  useEffect(() => {
    getProductAction();
  }, [getProductAction]);

  return (
    <div className="product-detail">
      <Navbar showArrow={true}/>
      <Details product={product} loading={loading} error={error} />
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getProduct: (payload) => dispatch({ type: GET_PRODUCT_REQUEST, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

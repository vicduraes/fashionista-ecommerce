import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";

import { GET_PRODUCT_REQUEST } from "../../store/actions/product";

import Navbar from "../../components/Navbar/Navbar";
import Detail from "../../components/Detail/Detail";

const ProductDetail = ({ location, getProduct }) => {
  const { product } = useSelector((state) => state.product);

  console.log(product);

  const getProductAction = () => {
    getProduct(location.state.id);
  };

  useEffect(() => {
    getProductAction();
  }, []);

  return (
    <div className="product-detail">
      <>
        <Navbar />
        <Detail />
      </>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getProduct: (payload) => dispatch({ type: GET_PRODUCT_REQUEST, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

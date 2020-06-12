import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { getProduct } from "../../store/actions/product";

import Navbar from "../../components/Navbar/Navbar";
import Detail from "../../components/Detail/Detail";

const ProductDetail = ({location}) => {
  const { loading, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const getProductAction = (id) =>{
    bindActionCreators(getProduct(id), dispatch);
  }
  // const getProductAction = bindActionCreators(
  //   getProduct,
  //   dispatch
  // );

  useEffect(() => {
    console.log(getProductAction);
    getProductAction(location.state.id);
  }, []);

 
  
  console.log(product)
  return (
    <div className="product-detail">
      <>
        <Navbar />
        <Detail />
      </>
    </div>
  );
};

export default ProductDetail;

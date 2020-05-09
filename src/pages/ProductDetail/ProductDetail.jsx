import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ChooseSize from "../../components/ChooseSize/ChooseSize";
import AddPack from "../../components/AddPack/AddPack";
import ProductName from "../../components/ProductName/ProductName";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import ProductInstallment from "../../components/ProductInstallment/ProductInstallment";

import "./ProductDetail.scss";

const imgDefault = "http://via.placeholder.com/470x680";

const ProductDetail = () => {
  return (
    <>
      <div className="product-detail">
        <Navbar />
        <div className="container">
          <div className="detail">
            <figure className="detail__img">
              <img src={imgDefault} alt="vestido transpasse" />
            </figure>
            <div className="detail__infos">
              <ProductName text="Vestido Transpasse Bow" />
              <ProductPrice price="199,90" size="large" />
              <ProductInstallment quantity="3" value="68,90" />
              <ChooseSize />
              <AddPack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

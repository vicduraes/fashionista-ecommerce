import React, { useState } from "react";

import PropTypes from "prop-types";

import ProductImg from "../ProductImg/ProductImg";
import ChooseSize from "../ChooseSize/ChooseSize";
import AddPack from "../AddPack/AddPack";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";
import BackToCatalog from "../BackToCatalog/BackToCatalog";

import "./Detail.scss";

const Detail = (props) => {
  const { product } = props;
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <>
      <div className="detail">
        <ProductImg src={product.image} imgDesciption={product.name} />
        <div className="detail__info">
          <div className="detail__box">
            <ProductName text={product.name} size="large" />
            <div className="detail__prices">
              <ProductPrice price={product.actual_price} size="medium" />
              <ProductInstallment text={product.installments} />
            </div>
            <ChooseSize
              sizes={product.sizes}
              setSelectedSize={setSelectedSize}
            />
            <AddPack selectedSize={selectedSize} product={product} />
          </div>
          <div className="detail__box">
            <BackToCatalog />
          </div>
        </div>
      </div>
    </>
  );
};

Detail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Detail;

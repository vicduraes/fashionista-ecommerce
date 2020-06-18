import React from "react";
import PropTypes from "prop-types";

import "./CardSearch.scss";

import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";

const CardSearch = (props) => {
  const { product } = props;

  return (
    <>
      <div className="card-search">
        <div className="card-search__description">
          <div className="card-search__img">
            <ProductImg src={product.image} imgDesciption={product.name} />
          </div>
          <ProductName text={product.name} size="medium" />
        </div>
        <div className="card-search__prices">
          <ProductPrice price={product.actual_price} size="medium" />
          <ProductInstallment text={product.installments} />
        </div>
      </div>
    </>
  );
};

CardSearch.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CardSearch;

import React from "react";
import PropTypes from "prop-types";

import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";

import "./CardSearch.scss";

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
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    actual_price: PropTypes.string.isRequired,
    installments: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardSearch;

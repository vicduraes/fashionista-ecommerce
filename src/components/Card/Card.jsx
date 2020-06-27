import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";

const Card = (props) => {
  const { product } = props;
  const hasDiscount = product.discount_percentage !== "";
  const discountPercentage = ` - ${product.discount_percentage}`;

  return (
    <div className="card" data-testid="card">
      <div className="card__img">
        <ProductImg src={product.image} imgDesciption={product.name} />
        {hasDiscount ? (
          <span className="card__discount">{discountPercentage}</span>
        ) : null}
      </div>

      <div className="card__description">
        <ProductName text={product.name} size="small" />
        {hasDiscount ? (
          <span className="card__price-old">{product.regular_price}</span>
        ) : null}
        <ProductPrice price={product.actual_price} size="small" />
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    actual_price: PropTypes.string.isRequired,
    regular_price: PropTypes.string.isRequired,
    discount_percentage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;

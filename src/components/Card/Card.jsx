import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";

const Card = (props) => {
  const { product } = props;
  const hasDiscount = product.discount_percentage === '' ? false : true;

  return (
    <div className="card">
      <div className="card__img">
        <ProductImg src={product.image} imgDesciption={product.name} />
        { hasDiscount ?
          <span className="card__discount"> - {product.discount_percentage}</span> :
          null
        }
      </div>

      <div className="card__description">
        <ProductName text={product.name} size="small" />
        { hasDiscount ?
          <span className="card__price-old">{product.regular_price}</span> :
          null
        }
        <ProductPrice price={product.actual_price} size="small" />
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired
};

export default Card;

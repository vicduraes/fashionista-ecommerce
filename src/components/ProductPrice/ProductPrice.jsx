import React from "react";
import PropTypes from "prop-types";
import "./ProductPrice.scss";

const ProductPrice = ({ price, size }) => {
  var className = 'product-price--' + size ;
  return <span className={className}> R${price}</span>
  };

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  size:  PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ProductPrice;


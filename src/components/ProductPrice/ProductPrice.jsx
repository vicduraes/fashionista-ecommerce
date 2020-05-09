import React from "react";
import PropTypes from "prop-types";
import "./ProductPrice.scss";

const ProductPrice = ({ price, size }) => {
  const className = `product__price--${size}`;
  return (
    <span className={className}>
      R$
      {price}
    </span>
  );
};

ProductPrice.defaultProps = {
  size: "medium",
};

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductPrice;

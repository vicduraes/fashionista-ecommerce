import React from "react";
import PropTypes from "prop-types";
import "./ProductPrice.scss";

const ProductPrice = (props) => {
  const { price, size } = props;
  const productClass = `product-price product-price--${size}`;
  return (
    <span className={productClass}>
      {price}
    </span>
  );
};

ProductPrice.defaultProps = {
  size: "medium",
};

ProductPrice.propTypes = {
  price: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductPrice;

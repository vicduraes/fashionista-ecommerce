import React from "react";
import PropTypes from "prop-types";

import "./ProductName.scss";

const ProductName = ({ text, size }) => {
  const className = `product-title product-title--${size}`;
  return <h3 className={className}>{text}</h3>;
};

ProductName.defaultProps = {
  size: "medium",
};

ProductName.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductName;

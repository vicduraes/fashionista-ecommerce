import React from "react";
import PropTypes from "prop-types";

import "./ProductName.scss";

const ProductName = ({ text }) => {
  return <h3 className="product-title">{text}</h3>;
};

ProductName.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProductName;

import React from "react";
import PropTypes from "prop-types";

import "./ProductName.scss";

const ProductName = (props) => {
  const { text, size } = props;
  const classTitle = `product-title product-title--${size}`;

  return <h3 className={classTitle}>{text}</h3>;
};

ProductName.defaultProps = {
  size: "medium",
};

ProductName.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ProductName;

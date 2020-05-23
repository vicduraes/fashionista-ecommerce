import React from "react";
import PropTypes from "prop-types";
import "./ProductInstallment.scss";

const ProductInstallment = ({ text }) => {
  return <span className="product-installment">{text}</span>;
};

ProductInstallment.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProductInstallment;

import React from "react";
import PropTypes from "prop-types";
import "./ProductInstallment.scss";

const ProductInstallment = ({ quantity, value }) => {
  return (
    <>
      <span className="product-installment">
        em até {quantity}x R${value}
      </span>
    </>
  );
};

ProductInstallment.propTypes = {
  quantity: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default ProductInstallment;

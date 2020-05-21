import React from "react";
import PropTypes from "prop-types";

import "./ProductImg.scss";

const ProductImg = ({ src, imgDesciption }) => {
  return (
    <figure className="product-img">
      <img src={src} alt={imgDesciption} />
    </figure>
  );
};

ProductImg.defaultProps = {
  imgDesciption: "",
};

ProductImg.propTypes = {
  src: PropTypes.string.isRequired,
  imgDesciption: PropTypes.string,
};

export default ProductImg;

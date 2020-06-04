import React from "react";
import PropTypes from "prop-types";

import imgDefault from "../../assets/images/img-default.jpg";

import "./ProductImg.scss";

const ProductImg = (props) => {
  const { src, imgDesciption } = props;
  const image = src === '' ? imgDefault : src;

  return (
    <figure className="product-img">
      <img src={image} alt={imgDesciption} />
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

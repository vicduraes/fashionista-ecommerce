import React from "react";

// import "./ProductPrice.scss";

const ProductPrice = ({ price }) => {
  return (
    <span className="card__price">
    {' '}
    R$
{price}
    {' '}
         </span>;
};

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ProductPrice;
ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

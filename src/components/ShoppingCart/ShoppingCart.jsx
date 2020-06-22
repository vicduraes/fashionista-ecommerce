import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./ShoppingCart.scss";

const ShoppingCart = (props) => {
  const { handleClick } = props;
  const pegaDoLocal = localStorage.getItem("amoraCart") || "{}";
  const jsonDoLocal = JSON.parse(pegaDoLocal);
  const count = jsonDoLocal.count || 0;

  const [countProducts, setCountProducts] = useState(count);

  return (
    <button type="button" className="shopping-cart" onClick={handleClick}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <i data-count={countProducts} className="shopping-cart--badge" />
    </button>
  );
};

ShoppingCart.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ShoppingCart;

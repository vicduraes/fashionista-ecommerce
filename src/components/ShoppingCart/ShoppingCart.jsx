import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./ShoppingCart.scss";

const ShoppingCart = (props) => {
  const { handleClick, count } = props;

  return (
    <button
      type="button"
      aria-label="carrinho"
      className="shopping-cart"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      <i data-count={count} className="shopping-cart--badge" />
    </button>
  );
};

ShoppingCart.propTypes = {
  handleClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default ShoppingCart;

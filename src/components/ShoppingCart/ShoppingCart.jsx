import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./ShoppingCart.scss";

const ShoppingCart = (props) => {
  const {handleClick} = props;
  return (
    <button className="shopping-cart" onClick={handleClick}>
      <FontAwesomeIcon icon={faShoppingCart}/>
      <i data-count="2" className="shopping-cart--badge"></i>
    </button>
  );
};

export default ShoppingCart;

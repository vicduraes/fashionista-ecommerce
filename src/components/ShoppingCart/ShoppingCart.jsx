import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ShoppingCart.scss";

const ShoppingCart = () => {
  return (
    <button type="submit" className="shoppingcart">
      <FontAwesomeIcon icon={faShoppingCart}/>
      <i data-count="2" className="shoppingcart--badge"></i>
    </button>
  );
};

export default ShoppingCart;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ShoppingCart.css";


const ShoppingCart = () => {
  return (
    <button type="submit" className="navbar__shoppingcart">
      <FontAwesomeIcon icon={faShoppingCart}/>
      <i data-count="2" className="navbar__shoppingcart--badge"></i>
    </button>
  );
};

export default ShoppingCart;

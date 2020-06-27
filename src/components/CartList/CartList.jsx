import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CardShop from "../CardShop/CardShop";
import Subtotal from "../Subtotal/Subtotal";

const CartList = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  function calculateTotal() {
    if (!cartProducts) {
      return 0;
    }

    return cartProducts
      .reduce(
        (total, next) =>
          (total +=
            next.quantity *
            Number(next.price.replace(/R\$ /g, "").replace(",", "."))),
        0
      )
      .toFixed(2);
  }

  return (
    <>
      <div className="cards-box">
        {cartProducts &&
          cartProducts.map((prod) => (
            <CardShop key={prod.style} product={prod} />
          ))}
      </div>
      <Subtotal subtotal={calculateTotal()} />
    </>
  );
};

CartList.propTypes = {
  cartProducts: PropTypes.shape({
    products: PropTypes.object.isRequired,
    style: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartList;

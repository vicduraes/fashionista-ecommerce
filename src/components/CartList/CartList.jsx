import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CardShop from "../CardShop/CardShop";
import Subtotal from "../Subtotal/Subtotal";

import EmptyCartGif from "../../assets/images/emptycart.gif";

import "./CartList.scss";

const subtotal = (cartProducts) => {
  if (cartProducts && cartProducts.lenght === 0) return 0;

  return cartProducts
    .reduce(
      (total, next) =>
        (total +=
          next.quantity *
          Number(next.price.replace(/R\$ /g, "").replace(",", "."))),
      0
    )
    .toFixed(2);
};

const EmptyContentError = () => {
  return (
    <div className="cart-error">
      <figure className="cart-error__img">
        <img src={EmptyCartGif} alt="Carrinho vazio" />
      </figure>
      <div className="cart-error--highlight">Ops!</div>
      <span>Sua sacola está vazia =( </span>
    </div>
  );
};

const Content = (props) => {
  const { cartProducts } = props;

  if (cartProducts.length === 0) return <EmptyContentError />;

  return (
    <>
      <div className="cards-box">
        {cartProducts &&
          cartProducts.map((prod) => (
            <CardShop key={prod.code_color} product={prod} />
          ))}
      </div>
      <Subtotal subtotal={subtotal(cartProducts)} />
    </>
  );
};

const CartList = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  return <Content cartProducts={cartProducts} />;
};

CartList.propTypes = {
  cartProducts: PropTypes.shape({
    products: PropTypes.object.isRequired,
    style: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartList;

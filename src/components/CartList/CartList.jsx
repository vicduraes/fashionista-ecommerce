import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CardShop from "../CardShop/CardShop";
import Subtotal from "../Subtotal/Subtotal";

const CartList = (props) => {
  const { cartProducts } = props;

  return (
    <>
      <div className="cards-box">
        {cartProducts &&
          cartProducts.products.map((prod) => (
            <Link
              to={{
                pathname: `/produto/${prod.style}`,
                state: { id: prod.style },
              }}
              style={{ textDecoration: "none" }}
            >
              <CardShop key={prod.style} product={prod} />
            </Link>
          ))}
      </div>
      <Subtotal subtotal="100" />
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

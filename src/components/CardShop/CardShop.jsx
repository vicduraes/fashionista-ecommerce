import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  addQuantity,
  removeQuantity,
  deleteFromCart,
} from "../../store/actions/cart";

import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";

import "./CardShop.scss";

const CardShop = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // const IncrementQuantity = () => {
  //   setQuantity(quantity + 1);
  // };
  // const DecreaseQuantity = () => {
  //   if (quantity === 1) return;
  //   setQuantity(quantity - 1);
  // };

  function changeQuantity(slug, qtd) {
    if (qtd === 1) {
      dispatch(addQuantity(slug));
    } else {
      dispatch(removeQuantity(slug));
    }
  }

  function handleDelete(slug) {
    dispatch(deleteFromCart(slug));
  }

  return (
    <Link
      to={{
        pathname: `/produto/${product.style}`,
        state: { id: product.style },
      }}
      style={{ textDecoration: "none" }}
    >
      <div className="card-shop">
        <div className="card-shop__description">
          <div className="card-shop__img">
            <ProductImg src={product.image} imgDesciption={product.name} />
            <button
              type="button"
              className="card-shop__btn-delete"
              onClick={() => handleDelete(product.size)}
            >
              Remover item
            </button>
          </div>
          <div className="card-shop__infos">
            <span className="card-shop__product-name">
              <ProductName text={product.name} size="medium" />
            </span>
            <span className="card-shop__size"> Tam. 40</span>
            <div className="card-shop__quantity">
              <button type="button" className="card-shop__quantity-btn">
                <FontAwesomeIcon
                  className="card-shop__quantity-icon"
                  icon={faMinusCircle}
                  // onClick={DecreaseQuantity}
                  onClick={() => changeQuantity(product.size, -1)}
                />
              </button>
              <span className="card-shop__quantity-number">
                {product.quantity}
              </span>
              <button type="button" className="card-shop__quantity-btn">
                <FontAwesomeIcon
                  className="card-shop__quantity-icon"
                  icon={faPlusCircle}
                  // onClick={IncrementQuantity}
                  onClick={() => changeQuantity(product.size, 1)}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="card-shop__prices">
          <ProductPrice price={product.actual_price} size="medium" />
          <ProductInstallment text={product.installments} />
        </div>
      </div>
    </Link>
  );
};

export default CardShop;

import React from "react";
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
  const dispatch = useDispatch();

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

  const formatSize = (sku) => {
    const splitArr = sku.split("_");
    const size = splitArr[splitArr.length - 1];
    return size;
  };

  return (
    <div className="card-shop">
      <div className="card-shop__description">
        <div className="card-shop__img">
          <Link
            to={{
              pathname: `/produto/${product.code_color}`,
              state: { id: product.code_color },
            }}
            style={{ textDecoration: "none" }}
          >
            <ProductImg src={product.image} imgDesciption={product.name} />
          </Link>

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
          <span className="card-shop__size">{formatSize(product.size)}</span>
          <div className="card-shop__quantity">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              className="card-shop__quantity-btn"
            >
              <FontAwesomeIcon
                className="card-shop__quantity-icon"
                icon={faMinusCircle}
                onClick={() => changeQuantity(product.size, -1)}
              />
            </button>
            <span className="card-shop__quantity-number">
              {product.quantity}
            </span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              className="card-shop__quantity-btn"
            >
              <FontAwesomeIcon
                className="card-shop__quantity-icon"
                icon={faPlusCircle}
                onClick={() => changeQuantity(product.size, 1)}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="card-shop__prices">
        <ProductPrice price={product.price} size="medium" />
        <ProductInstallment text={product.installments} />
      </div>
    </div>
  );
};

export default CardShop;

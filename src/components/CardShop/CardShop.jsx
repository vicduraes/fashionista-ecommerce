import React from "react";

import "./CardShop.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";

const CardShop = (props) => {
  const { product } = props;

  return (
    <>
      <div className="card-shop">
        <div className="card-shop__description">
          <div className="card-shop__img">
            <ProductImg src={product.image} imgDesciption={product.name} />
            <button type="button" className="card-shop__btn-delete">
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
                />
              </button>
              <span className="card-shop__quantity-number"> 1 </span>
              <button type="button" className="card-shop__quantity-btn">
                <FontAwesomeIcon
                  className="card-shop__quantity-icon"
                  icon={faPlusCircle}
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
    </>
  );
};

export default CardShop;

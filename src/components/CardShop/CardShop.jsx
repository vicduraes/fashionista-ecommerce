import React from "react";

import "./CardShop.scss";

import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";
import imgDefault from "../../assets/images/img-default.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle  } from "@fortawesome/free-solid-svg-icons";

const CardShop = () => {
  return (
    <>
      <div className="card-shop">
        <figure className="card-shop__img">
          <ProductImg src={imgDefault} imgDesciption="calça classic print" />
        </figure>
        <div className="card-shop__description">
          <span className="card-shop__product-name">
            <ProductName text="calça classic print" size="medium" />
          </span>
          <button>Remover item</button>
          <span className="card-shop__size"> Tam. 40</span>
          <div className="card-shop__quantity">
            <button>
              <FontAwesomeIcon
                className="..."
                icon={faPlusCircle}
              />
            </button>
            <span> 1 </span>
            <button>
              <FontAwesomeIcon
                className="..."
                icon={faMinusCircle}
              />
            </button>
          </div>
          <div className="card-shop__prices">
            <ProductPrice price="199,00" size="medium" />
            <ProductInstallment text="3x R$53,90" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShop;

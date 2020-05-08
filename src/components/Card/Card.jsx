import React from "react";

import "./Card.scss";

import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import imgDefault from "../../assets/images/img-default.jpeg";

const Card = () => {
  return (
    <div className="card">
      <figure className="card__img">
        <img src={imgDefault} alt="vestido transpasse" />
        <span className="card__discount"> - 23%</span>
      </figure>

      <div className="card__description">
        <ProductName text="Vestido Transpasse Bow" />
        <span className="card__price-old">R$ 299,00</span>
        <ProductPrice />
      </div>
    </div>
  );
};

export default Card;

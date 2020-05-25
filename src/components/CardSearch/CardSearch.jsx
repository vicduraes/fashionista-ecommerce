import React from "react";

import "./CardSearch.scss";

import ProductImg from "../ProductImg/ProductImg";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";
import imgDefault from "../../assets/images/img-default.jpeg";

const CardSearch = () => {
  return (
    <>
      <div className="card-search">
        <div className="card-search__img">
          <ProductImg src={imgDefault} imgDesciption="Vestido Transpasse Bow" />
        </div>
        <div className="card-search__description">
          <span className="card-search__product-name">
            <ProductName text="Vestido Transpasse Bow" size="medium" />
          </span>
          <div className="card-search__prices">
            <ProductPrice price="199,00" size="medium" />
            <ProductInstallment text="3x R$53,90" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSearch;

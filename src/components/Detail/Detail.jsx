import React from "react";

import "./Detail.scss";

import Navbar from "../Navbar/Navbar";
import ChooseSize from "../ChooseSize/ChooseSize";
import AddPack from "../AddPack/AddPack";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";
import BackToCatalog from "../BackToCatalog/BackToCatalog";


import imgDefault from "../../assets/images/img-default.svg";

const Detail = () => {
  return (
    <>
      <Navbar />
      <div className="detail">
        <figure className="detail__img">
          <img src={imgDefault} alt="vestido transpasse" />
        </figure>
        <div className="detail__info">
          <ProductName text="Vestido Transpasse Bow" />
          <div className="detail__prices">
            <ProductPrice price="199,90" size="large" />
            <ProductInstallment quantity="3" value="68,90" />
          </div>
          <ChooseSize />
          <AddPack />
          <BackToCatalog/>
        </div>
      </div>
    </>
  );
};

export default Detail;

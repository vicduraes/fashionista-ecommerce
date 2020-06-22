import React from "react";
import classnames from "classnames";

import "./AddPack.scss";

const AddPack = (props) => {
  const { selectedSize, product } = props;

  const disabledButton = () => {
    let bool = true;
    if (selectedSize !== "") {
      bool = false;
    }
    return bool;
  };

  const addProductToCart = () => {
    const amoraCart = localStorage.getItem("amoraCart");
    let products = [];
    const obj = {};

    if (amoraCart) {
      const objAmoraCart = JSON.parse(amoraCart);
      products = objAmoraCart.products;
      obj.count = objAmoraCart.count + 1;
    } else {
      obj.count = 1;
    }

    products.push(product);
    obj.products = products;
    localStorage.setItem("amoraCart", JSON.stringify(obj));
  };

  return (
    <div className="add-pack">
      <button
        type="button"
        className={classnames("add-pack__button", {
          "add-pack__button--disabled": selectedSize === "",
        })}
        disabled={disabledButton()}
        onClick={() => addProductToCart()}
      >
        Adicionar à sacola
      </button>
    </div>
  );
};

export default AddPack;

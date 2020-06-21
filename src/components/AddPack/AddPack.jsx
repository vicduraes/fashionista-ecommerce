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
    if (!localStorage.getItem("amoraCart")) {
      return localStorage.setItem("amoraCart", JSON.stringify(product));
    }
    return localStorage.setItem("amoraCart", JSON.stringify(product));
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

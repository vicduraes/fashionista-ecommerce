import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cart";

import "./AddPack.scss";

const AddPack = (props) => {
  const { selectedSize } = props;
  const product = useSelector((state) => state.product.product);

  const disabledButton = () => {
    let bool = true;
    if (selectedSize !== "") {
      bool = false;
    }
    return bool;
  };

  const disptach = useDispatch();

  function handleAddToCart(prod) {
    disptach(
      addToCart(
        prod.name,
        prod.image,
        selectedSize,
        prod.actual_price,
        prod.installments
      )
    );

    // success(`${product.name} adicionado ao carrinho!`);
    return true;
  }

  return (
    <div className="add-pack">
      <button
        type="button"
        className={classnames("add-pack__button", {
          "add-pack__button--disabled": selectedSize === "",
        })}
        disabled={disabledButton()}
        onClick={() => handleAddToCart(product)}
      >
        Adicionar à sacola
      </button>
    </div>
  );
};

export default AddPack;

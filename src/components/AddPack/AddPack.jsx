import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cart";

import "./AddPack.scss";

const AddPack = (props) => {
  const { selectedSize } = props;
  const product = useSelector((state) => state.product.product);
  const disptach = useDispatch();

  const disabledButton = () => {
    let bool = true;
    if (selectedSize !== "") {
      bool = false;
    }
    return bool;
  };

  const feedbackMessage = (e) => {
    const originalText = e.textContent;
    const originalBckColor = e.style.backgroundColor;

    e.textContent = "Produto adicionado!";
    e.style.backgroundColor = "#9c7397";

    setTimeout(() => {
      e.textContent = originalText;
      e.style.backgroundColor = originalBckColor;
    }, 1500);
  };

  const handleAddToCart = (e, prod) => {
    disptach(
      addToCart(
        prod.name,
        prod.image,
        selectedSize,
        prod.actual_price,
        prod.code_color,
        prod.installments
      )
    );

    feedbackMessage(e);

    return true;
  };

  return (
    <div className="add-pack">
      <button
        type="button"
        className={classnames("add-pack__button", {
          "add-pack__button--disabled": selectedSize === "",
        })}
        disabled={disabledButton()}
        onClick={(e) => handleAddToCart(e.target, product)}
      >
        Adicionar à sacola
      </button>
    </div>
  );
};

export default AddPack;

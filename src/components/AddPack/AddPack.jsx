import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from "classnames";

import { addProduct } from "../../store/actions/cart";

import "./AddPack.scss";

const AddPack = (props) => {
  const { selectedSize, product } = props;
  const dispatch = useDispatch();

  const addProductAction = useMemo(
    () => bindActionCreators(addProduct, dispatch),
    [dispatch]
  );

  const disabledButton = () => {
    let bool = true;
    if (selectedSize !== "") {
      bool = false;
    }
    return bool;
  };

  return (
    <div className="add-pack">
      <button
        type="button"
        className={classnames("add-pack__button", {
          "add-pack__button--disabled": selectedSize === "",
        })}
        disabled={disabledButton()}
        onClick={() => addProductAction(product)}
      >
        Adicionar à sacola
      </button>
    </div>
  );
};

export default AddPack;

import React from "react";
import classnames from "classnames";

import "./AddPack.scss";

const AddPack = (props) => {
  const { selectedSize } = props;

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
      >
        Adicionar à sacola
      </button>
    </div>
  );
};

export default AddPack;

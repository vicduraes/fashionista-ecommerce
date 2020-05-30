import React, { useState } from "react";
import classnames from "classnames";

import "./ChooseSize.scss";

const ChooseSize = () => {
  const [buttonP, setButtonP] = useState(false);
  const [buttonM, setButtonM] = useState(false);
  const [buttonG, setButtonG] = useState(false);

  const clearButton = () => {
    return setButtonP(false) + setButtonM(false) + setButtonG(false);
  };

  const handleClickButtonP = () => {
    clearButton();
    return setButtonP(!buttonP);
  };

  const handleClickButtonM = () => {
    clearButton();
    return setButtonM(!buttonM);
  };

  const handleClickButtonG = () => {
    clearButton();
    return setButtonG(!buttonG);
  };

  return (
    <div className="field-choose-size">
      <span>Escolha o tamanho:</span>
      <div className="field-choose-size__button">
        <button
          type="button"
          className={classnames("field-choose-size__size-button", {
            "field-choose-size__size-button--click": buttonP,
          })}
          onClick={handleClickButtonP}
        >
          P
        </button>
        <button
          type="button"
          className={classnames("field-choose-size__size-button", {
            "field-choose-size__size-button--click": buttonM,
          })}
          onClick={handleClickButtonM}
        >
          M
        </button>
        <button
          type="button"
          className={classnames("field-choose-size__size-button", {
            "field-choose-size__size-button--click": buttonG,
          })}
          onClick={handleClickButtonG}
        >
          G
        </button>
      </div>
    </div>
  );
};

export default ChooseSize;

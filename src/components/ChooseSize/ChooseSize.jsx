import React, { useState } from "react";

import "./ChooseSize.scss";

const ChooseSize = () => {
  const [toggle, setToggle] = useState(false);

  const toggleIt = () => {
    setToggle(!toggle);
  };

  return (
    <div className="field-choose-size">
      <span>Escolha o tamanho:</span>
      <div className="field-choose-size__button">
        <button
          className={
            toggle
              ? " field-choose-size__size-button field-choose-size__size-button--click"
              : "field-choose-size__size-button"
          }
          onClick={toggleIt}
        >
          P
        </button>
        <button className="field-choose-size__size-button">M</button>
        <button className="field-choose-size__size-button">G</button>
      </div>
    </div>
  );
};

export default ChooseSize;

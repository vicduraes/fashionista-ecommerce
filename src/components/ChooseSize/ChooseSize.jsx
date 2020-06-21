import React, { useState } from "react";
import classnames from "classnames";

import "./ChooseSize.scss";

const ChooseSize = (props) => {
  const { sizes, setSelectedSize } = props;

  const [idButton, setIdButton] = useState("");

  const handleClickButton = (id) => {
    setSelectedSize(id);
    return setIdButton(id);
  };

  return (
    <div className="field-choose-size">
      <span>Escolha o tamanho:</span>
      <div className="field-choose-size__button">
        {sizes &&
          sizes.map(
            (size) =>
              size.available && (
                <button
                  key={size.size}
                  type="button"
                  className={classnames("field-choose-size__size-button", {
                    "field-choose-size__size-button--click":
                      idButton === size.size,
                  })}
                  onClick={() => handleClickButton(size.size)}
                >
                  {size.size}
                </button>
              )
          )}
      </div>
    </div>
  );
};

export default ChooseSize;

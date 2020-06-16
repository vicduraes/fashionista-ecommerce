import React, { useState } from "react";
import classnames from "classnames";

import "./ChooseSize.scss";

const ChooseSize = (props) => {  
  const { sizes } = props;
  
  const [button, setButton] = useState(false);
  
  const clearButton = () => {
    return setButton(false) 
  };
  
  const handleClickButton = () => {
    clearButton();
    return setButton(!button);
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
                type="button"
                className={classnames("field-choose-size__size-button", {
                  "field-choose-size__size-button--click": button,
                })}
                onClick={handleClickButton}
                >
                {size.size}
              </button> 
        ))}
      
      
      </div>
      </div>
      );
};
    
    export default ChooseSize;
    
import React from "react";

import "./Error.scss";

const Error = () => {
  return (
    <div className="error-block" data-testid="error-message">
      <span className="error-block--highlight">Ops!</span>
      <span className="error-block__message">
        Ocorreu um erro inesperado. Tente novamente.
      </span>
    </div>
  );
};

export default Error;

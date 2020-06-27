import React from "react";
import PropTypes from "prop-types";

import "./Subtotal.scss";

const Subtotal = (props) => {
  const { subtotal } = props;
  const text = `Subtotal - R$ ${subtotal}`;

  return (
    <div className="subtotal">
      <p className="subtotal__value">{text}</p>
    </div>
  );
};

Subtotal.propTypes = {
  subtotal: PropTypes.string.isRequired,
};

export default Subtotal;

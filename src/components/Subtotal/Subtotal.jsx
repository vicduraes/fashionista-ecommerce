import React from "react";
import PropTypes from "prop-types";

import "./Subtotal.scss";

const Subtotal = (props) => {
  const { value } = props;
  const text = `Subtotal - ${value}`;

  return (
    <div className="subtotal">
      <p className="subtotal__value">{text}</p>
    </div>
  );
};

Subtotal.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Subtotal;

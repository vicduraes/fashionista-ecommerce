import React from "react";
import PropTypes from "prop-types";

import "./ItensCount.scss";

const ItensCount = (props) => {
  const { totalCount } = props;
  const text = `${totalCount} Itens`;

  return (
    <div className="itens-count">
      <span className="itens-count__line">{}</span>
      <p className="itens-count__itens">{text}</p>
      <span className="itens-count__line">{}</span>
    </div>
  );
};

ItensCount.propTypes = {
  totalCount: PropTypes.number.isRequired,
};

export default ItensCount;

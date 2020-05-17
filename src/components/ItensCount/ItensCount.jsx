import React from 'react';

import './ItensCount.scss';

const ItensCount = (props) => {
  return (
    <div className="itens-count">
      <span className="itens-count__span"></span>
      <p className="itens-count__itens">{props.totalCount} Itens</p>
      <span className="itens-count__span"></span>
    </div>
  );
};

export default ItensCount;

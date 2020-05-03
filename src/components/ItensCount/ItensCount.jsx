import React from 'react';
import './ItensCount.scss';

const ItensCount = (props) => {
  return (
    <div className="itens-count">
      <span></span>
      <p>{props.totalCount} Itens</p>
      <span></span>
    </div>
  );
};

export default ItensCount;

import React from 'react';

import './Card.scss';

import imgDefault from '../../assets/images/img-default.jpeg';

const Card = () => {
  return (
    <div className="card">
      <figure className="card__img">
        <img src={imgDefault} alt="vestido transpasse" />
        <span className="card__discount"> - 23%</span>
      </figure>

      <div className="card__description">
        <h3 className="card__title">Vestido Transpasse Bow</h3>
        <span className="card__price-old">R$ 299,00</span>
        <span className="card__price">R$ 199,00</span>
      </div>
    </div>
  );
};

export default Card;

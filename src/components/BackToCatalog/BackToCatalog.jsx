import React from 'react';
import './BackToCatalog.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const BackToCatalog = (props) => {
  return (
    <div className="back-to-catalog">
      <FontAwesomeIcon className="back-to-catalog__icon" icon={faChevronLeft} />
      <p className="back-to-catalog__text">Voltar ao Catálogo</p>
    </div>
  );
};

export default BackToCatalog;


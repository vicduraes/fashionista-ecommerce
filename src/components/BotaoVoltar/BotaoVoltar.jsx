import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./BotaoVoltar.css";

const BotaoVoltar = () => {
  return (
    <div className="botao-voltar">
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default BotaoVoltar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Busca.css";

const Busca = () => {
  return (
    <div className="busca">
      <input
        type="text"
        placeholder="O que você procura?"
        className="busca__input"
      ></input>
      <button type="submit" className="busca__botao">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Busca;

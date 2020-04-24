import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Busca = () => {
  return (
    <>
      <input type="text" placeholder="Faça sua busca"></input>
      <FontAwesomeIcon icon={faSearch} />
    </>
  );
};

export default Busca;

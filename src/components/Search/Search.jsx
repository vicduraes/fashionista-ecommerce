import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="O que você procura?"
        className="search__input"
      ></input>
      <button type="submit" className="search__button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Search;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchButton.scss";

const SearchButton = () => {
  return (
    <button className="search-button">
        <FontAwesomeIcon icon={faSearch} />
    </button>
  );
};

export default SearchButton;

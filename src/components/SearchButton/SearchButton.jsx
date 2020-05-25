import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import "./SearchButton.scss";

const SearchButton = (props) => {
  const{handleClick} = props;
  return (
    <>
      <button className="search-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
     
    </>
  );
};

export default SearchButton;

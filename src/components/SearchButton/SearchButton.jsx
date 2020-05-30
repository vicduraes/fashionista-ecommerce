import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchButton.scss";

const SearchButton = (props) => {
  const { handleClick } = props;

  return (
    <>
      <button type="button" className="search-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
};

SearchButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SearchButton;

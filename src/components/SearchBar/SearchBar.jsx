import React from "react";

import SearchButton from "../SearchButton/SearchButton";

import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <>
      <div className="search">
        <div className="container">
          <input
            type="text"
            placeholder="O que você procura?"
            className="search__input"
          />
          <SearchButton />
        </div>
      </div>
    </>
  );
};

export default SearchBar;

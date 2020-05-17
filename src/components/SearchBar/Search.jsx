import React from "react";

import SearchButton from "../SearchButton/SearchButton";

import "./Search.scss";

const SearchBar = () => {
  return (
    <>
      <div className="search">
        <div className="container">
          <input
            type="text"
            placeholder="O que você procura?"
            className="search__input"
          ></input>
          <SearchButton/>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchButton from "../SearchButton/SearchButton";
import CardSearch from "../CardSearch/CardSearch";
import ItensCount from "../ItensCount/ItensCount";

import "./SearchBar.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsList, setProductsList] = useState([]);
  const { catalog } = useSelector((state) => state.catalog);

  const removeSpecialChar = (text) => {
    return text
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleOnChange = (e) => {
    setSearchTerm(removeSpecialChar(e.target.value));
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = catalog.filter((prod) =>
        removeSpecialChar(prod.name).includes(searchTerm)
      );
      setProductsList(results);
    } else {
      setProductsList([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="search">
        <div className="container">
          <input
            type="text"
            placeholder="O que você procura?"
            className="search__input"
            value={searchTerm}
            onChange={handleOnChange}
          />
          <SearchButton onClick={handleOnChange} />
        </div>
      </div>
      <div className="cards-box">
        <ItensCount totalCount="2" />
        {productsList.map((prod, i) => (
          <CardSearch product={prod} key={i} />
        ))}
      </div>
    </>
  );
};

export default SearchBar;

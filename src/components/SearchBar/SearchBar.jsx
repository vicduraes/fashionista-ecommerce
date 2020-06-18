import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchButton from "../SearchButton/SearchButton";
import CardSearch from "../CardSearch/CardSearch";
import ItensCount from "../ItensCount/ItensCount";

import "./SearchBar.scss";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [productsList, setProducts] = useState([]);
  const { catalog } = useSelector((state) => state.catalog);

  const onFilterCatalog = (catalog, input) => {
    return catalog.filter((prod) => prod.name.toLowerCase().includes(input));
  };

  const filteredCatalog = onFilterCatalog(catalog, input);

  const filteredProducts = () => {
    setProducts(filteredCatalog);
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
    filteredProducts();
  };

  return (
    <>
      <div className="search">
        <div className="container">
          <input
            type="text"
            placeholder="O que você procura?"
            className="search__input"
            onChange={handleOnChange}
          />
          <SearchButton onClick={handleOnChange} />
        </div>
      </div>
      <div className="cards-box">
        <ItensCount totalCount="2" />
        {productsList.map((prod) => (
          <CardSearch product={prod} />
        ))}
      </div>
    </>
  );
};

export default SearchBar;

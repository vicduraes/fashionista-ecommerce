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

  const filteredProducts = () => {
    const filteredCatalog = onFilterCatalog(catalog, input);
    setProducts(filteredCatalog);
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
    filteredProducts();
  };

  console.log(catalog);

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
          <SearchButton />
        </div>
      </div>
      <div>
        <div className="cards-box">
          <ItensCount totalCount="2" />
          {productsList.map((prod) => (
            <CardSearch product={prod} key={prod.style} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;

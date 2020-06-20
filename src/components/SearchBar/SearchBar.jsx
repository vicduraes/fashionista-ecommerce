import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  }, [searchTerm, catalog]);

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
        <ItensCount totalCount={productsList.length} />
        {productsList.map((prod) => (
          <Link
            to={{
              pathname: `/produto/${prod.style}`,
              state: { id: prod.style },
            }}
            style={{ textDecoration: "none" }}
          >
            <CardSearch key={prod.style} product={prod} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchBar;

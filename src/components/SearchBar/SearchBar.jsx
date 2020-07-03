import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardSearch from "../CardSearch/CardSearch";
import ItensCount from "../ItensCount/ItensCount";

import "./SearchBar.scss";

const EmptyContentError = () => {
  return (
    <div className="search-error">
      <span className="search-error--highlight">Ops!</span>
      <span>Nenhum resultado encontrado para a sua pesquisa =(</span>
    </div>
  );
};

const Cards = (props) => {
  const { productsList } = props;
  return (
    <div className="cards-box">
      {productsList.length ? (
        <ItensCount totalCount={productsList.length} />
      ) : (
        <></>
      )}
      {productsList.map((prod) => (
        <Link
          key={prod.code_color}
          to={{
            pathname: `/produto/${prod.code_color}`,
            state: { id: prod.code_color },
          }}
          style={{ textDecoration: "none" }}
        >
          <CardSearch product={prod} />
        </Link>
      ))}
    </div>
  );
};

const Content = (props) => {
  const { productsList, searchTerm } = props;

  if (searchTerm && productsList.length === 0) return <EmptyContentError />;

  return <Cards productsList={productsList} />;
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsList, setProductsList] = useState([]);
  const { catalog } = useSelector((state) => state.catalog);

  const removeSpecialChar = (text) => {
    return text
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
        </div>
      </div>
      <Content productsList={productsList} searchTerm={searchTerm} />
    </>
  );
};

export default SearchBar;

import React from "react";


import CardSearch from "../../components/CardSearch/CardSearch";
import NavbarSecondary from "../../components/NavbarSecondary/NavbarSecondary";
import Subtotal from "../../components/Subtotal/Subtotal";

const Search = () => {
  return (
    <div className="product-detail">
      <>
        <NavbarSecondary total="2"/>
        <CardSearch />
        <Subtotal value="R$ 480,00"/>
      </>
    </div>
  );
};

export default Search;

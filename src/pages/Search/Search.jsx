import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import CardSearch from "../../components/CardSearch/CardSearch";
import NavbarSecondary from "../../components/NavbarSecondary/NavbarSecondary";

const Search = () => {
  return (
    <div className="product-detail">
      <>
        <NavbarSecondary total="2"/>
        <CardSearch />
      </>
    </div>
  );
};

export default Search;

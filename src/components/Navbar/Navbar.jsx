import React from "react";

import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import Search from "../SearchBar/Search";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import SearchButton from "../SearchButton/SearchButton.jsx";

import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar--mobile">
          <div className="navbar__elements container">
            <span className="navbar__arrow-button"><BackArrowIcon /></span>
            <img alt="logo da Fashionista" className="navbar__logo" src={logo} />
            <div className="navbar__elements--desktop">
              <span className="navbar__search-button"><SearchButton /></span>
              <ShoppingCart />
            </div>
          </div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Navbar;

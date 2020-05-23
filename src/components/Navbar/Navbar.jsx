import React from "react";
import { Link } from "react-router-dom";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Search from "../SearchBar/SearchBar";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import SearchButton from "../SearchButton/SearchButton";

import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__elements container">
          <span className="navbar__arrow-button">
            <BackArrowIcon />
          </span>
          <figure>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                alt="logo da Fashionista"
                className="navbar__logo"
                src={logo}
              />
            </Link>
          </figure>
          <div className="navbar__elements--desktop">
            <span className="navbar__search-button">
              <SearchButton />
            </span>
            <ShoppingCart />
          </div>
        </div>
        <Search />
      </nav>
    </>
  );
};

export default Navbar;

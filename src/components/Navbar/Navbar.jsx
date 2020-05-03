import React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import Search from "../Search/Search";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import logo from "../../assets/images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <BackArrowIcon />
        <img alt="logo da Fashionista" className="navbar__logo" src={logo} />
        <ShoppingCart />
        <Search />
      </div>
      <div className="navbar--desktop">
        <img alt="logo da Fashionista" className="navbar__logo" src={logo} />
        <div className="navbar__icons">
          <Search />
          <ShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Navbar;

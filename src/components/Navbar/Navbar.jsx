import React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import Search from "../Search/Search";
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <BotaoVoltar />
      <img alt="logo da Fashionista" className="navbar__logo" src={logo} />
      <ShoppingCart />
      <Search />
    </div>
  );
};

export default Navbar;

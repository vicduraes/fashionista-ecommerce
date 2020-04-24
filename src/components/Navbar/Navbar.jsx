import React from "react";
import Carrinho from "../Carrinho/Carrinho.jsx";
import Busca from "../Busca/Busca";
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <BotaoVoltar />
      <img alt="logo da Fashionista" className="navbar__logo" src={logo} />
      <Carrinho />
      <Busca />
    </div>
  );
};

export default Navbar;

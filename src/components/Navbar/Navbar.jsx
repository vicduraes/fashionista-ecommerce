import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Modal from "../Modal/Modal";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import SearchButton from "../SearchButton/SearchButton";
import SearchBar from "../SearchBar/SearchBar";
import CartList from "../CartList/CartList";
import ModalHeader from "../ModalHeader/ModalHeader";

import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const openModalSearch = () => setShowSearch(true);
  const closeModalSearch = () => setShowSearch(false);

  const openModalCart = () => setShowCart(true);
  const closeModalCart = () => setShowCart(false);

  const quantityProductCart = () => {
    return products.reduce((total, next) => (total += next.quantity), 0);
  };

  return (
    <>
      <nav className="navbar" data-testid="navbar">
        <div className="navbar__elements container">
          <span className="navbar__arrow-button">
            <BackArrowIcon />
          </span>
          <figure>
            <Router>
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  alt="logo da Fashionista"
                  className="navbar__logo"
                  src={logo}
                />
              </Link>
            </Router>
          </figure>
          <div className="navbar__elements--desktop">
            <span className="navbar__search-button">
              <SearchButton handleClick={openModalSearch} />
              <Modal closeModal={closeModalSearch} show={showSearch}>
                <ModalHeader
                  text="Buscar Produtos"
                  closeModal={closeModalSearch}
                />
                <SearchBar />
              </Modal>
            </span>
            <ShoppingCart
              handleClick={openModalCart}
              count={quantityProductCart()}
            />
            <Modal closeModal={closeModalCart} show={showCart}>
              <ModalHeader
                text="Sacola"
                total={quantityProductCart()}
                closeModal={closeModalCart}
              />
              <CartList />
            </Modal>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

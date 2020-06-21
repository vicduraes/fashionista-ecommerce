import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import SearchButton from "../SearchButton/SearchButton";
import SearchBar from "../SearchBar/SearchBar";
import ModalHeader from "../ModalHeader/ModalHeader";
import CardShop from "../CardShop/CardShop";
import Subtotal from "../Subtotal/Subtotal";

import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const openModalSearch = () => setShowSearch(true);
  const closeModalSearch = () => setShowSearch(false);

  const openModalCart = () => setShowCart(true);
  const closeModalCart = () => setShowCart(false);

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
              <SearchButton handleClick={openModalSearch} />
              <Modal closeModal={closeModalSearch} show={showSearch}>
                <ModalHeader
                  text="Buscar Produtos"
                  closeModal={closeModalSearch}
                />
                <SearchBar />
              </Modal>
            </span>
            <ShoppingCart handleClick={openModalCart} />
            <Modal closeModal={closeModalCart} show={showCart}>
              <ModalHeader
                text="Sacola"
                total="3"
                closeModal={closeModalCart}
              />

              <div className="cards-box">
                {/* {productsList.map((prod) => ( */}
                <Link
                  // to={{
                  //   pathname: `/produto/${prod.style}`,
                  //   state: { id: prod.style },
                  // }}
                  style={{ textDecoration: "none" }}
                >
                  <CardShop />
                  <CardShop />
                  <CardShop />
                </Link>
                {/* ))} */}
              </div>
              <Subtotal subtotal="100" />
            </Modal>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

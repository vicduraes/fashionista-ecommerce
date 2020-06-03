import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import SearchBar from "../SearchBar/SearchBar";
import Subtotal from "../Subtotal/Subtotal";
import CardSearch from "../CardSearch/CardSearch";
import NavbarSecondary from "../NavbarSecondary/NavbarSecondary";
import CardShop from "../CardShop/CardShop";
import ItensCount from "../ItensCount/ItensCount";
import "./Modal.scss";

const Modal = (props) => {
  const { show, closeModal } = props;
  const modalComponent = (
    <>
      <div className={show ? "overlay" : "hide"}>
        <div className={show ? "modal" : "hide"}>
          <NavbarSecondary total="3" closeFunction={closeModal}/>
          <SearchBar/>
          <div className="cards-box">
            <ItensCount totalCount="2" />
            <CardSearch />
            <CardSearch />
            <CardSearch />
            <CardShop />
            <CardShop />
            <CardShop />
          </div>
          <Subtotal/>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(
    modalComponent,
    document.getElementById("modal-root")
  );
};

Modal.defaultProps = {
  size: "medium",
};

Modal.propTypes = {
  show: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;

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
  const product = {
    actual_price: "R$ 199,90",
    code_color: "20002605_613",
    color: "TAPEÇARIA",
    color_slug: "tapecaria",
    discount_percentage: "",
    image:
      "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
    installments: "3x R$ 66,63",
    name: "VESTIDO TRANSPASSE BOW",
    on_sale: false,
    regular_price: "R$ 199,90",
  };

  const modalComponent = (
    <>
      <div className={show ? "overlay" : "hide"}>
        <div className={show ? "modal" : "hide"}>
          <NavbarSecondary total="3" closeModal={closeModal} />
          <SearchBar />
          <div className="cards-box">
            <ItensCount totalCount="2" />
            <CardSearch product={product} />
          </div>
          <Subtotal subtotal="400" />
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

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import NavbarSecondary from "../NavbarSecondary/NavbarSecondary";
import "./Modal.scss";

const Modal = (props) => {
  const { show, closeModal } = props;

  const modalComponent = (
    <>
      <div className={show ? "overlay" : "hide"}>
        <div className={show ? "modal" : "hide"}>
          <NavbarSecondary total="3" closeModal={closeModal} />
          <SearchBar />
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

import React from "react";
import ReactDOM from "react-dom";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import SearchBar from "../SearchBar/SearchBar";
import CardSearch from "../CardSearch/CardSearch";
import ItensCount from "../ItensCount/ItensCount";
import "./Modal.scss";

const Modal = (props) => {
  const { show, closeModal } = props;
  const modalComponent = (
    <>
      <div className={show ? "overlay" : "hide"}>
        <div className={show ? "modal" : "hide"}>
          <BackArrowIcon closeFunction={closeModal} />
          <SearchBar />
          <ItensCount totalCount="2" />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(
    modalComponent,
    document.getElementById("modal-root")
  );
};

export default Modal;

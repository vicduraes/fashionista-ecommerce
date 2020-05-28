import React from "react";
import ReactDOM from "react-dom";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";
import "./Modal.scss";

const Modal = (props) => {
  const { show, closeModal } = props;
  const modalComponent = (
    <>
      <div className={show ? "overlay" : "hide"}>
        <div className={show ? "modal" : "hide"}>
          <BackArrowIcon closeFunction={closeModal} />
          <h1>Modal heading</h1>
          <p>This is modal content</p>
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

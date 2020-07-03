import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = (props) => {
  const { show, children } = props;

  const modalComponent = (
    <>
      <div className={show ? "overlay" : "hide"}>
        <div className={show ? "modal" : "hide"}>{children}</div>
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
  show: PropTypes.bool.isRequired,
};

export default Modal;

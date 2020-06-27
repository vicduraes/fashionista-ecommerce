import React from "react";
import PropTypes from "prop-types";

import "./ModalHeader.scss";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";

const ModalHeader = (props) => {
  const { text, total, closeModal } = props;
  const fullText = total ? `Sacola (${total})` : text;

  return (
    <div className="navbar-secondary">
      <div className="navbar-secondary__arrow">
        <BackArrowIcon show={true} closeFunction={closeModal} />
      </div>
      <p className="navbar-secondary__total">{fullText}</p>
    </div>
  );
};

ModalHeader.propTypes = {
  total: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalHeader;

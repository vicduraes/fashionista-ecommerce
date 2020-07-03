import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./BackArrowIcon.scss";

const BackArrowIcon = (props) => {
  const { closeFunction, show } = props;
  return show ? (
    <button
      type="button"
      aria-label="Voltar"
      className="back-arrow"
      onClick={closeFunction}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  ) : null;
};

BackArrowIcon.propTypes = {
  closeFunction: PropTypes.func,
};

export default BackArrowIcon;

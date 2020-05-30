import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./BackArrowIcon.scss";

const BackArrowIcon = (props) => {
  const { closeFunction } = props;

  return (
    <button type="button" className="back-arrow" onClick={closeFunction}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

BackArrowIcon.propTypes = {
  closeFunction: PropTypes.func.isRequired,
};

export default BackArrowIcon;

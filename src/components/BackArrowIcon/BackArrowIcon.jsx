import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./BackArrowIcon.scss";

const BackArrowIcon = (props) => {
  const { closeFunction } = props;
  return (
    <button className="back-arrow" onClick={closeFunction}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default BackArrowIcon;

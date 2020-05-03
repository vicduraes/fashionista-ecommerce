import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./BackArrowIcon.scss";

const BackArrowIcon = () => {
  return (
    <div className="back-arrow">
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default BackArrowIcon;

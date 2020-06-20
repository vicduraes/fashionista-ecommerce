import React from "react";
import PropTypes from "prop-types";

import "./NavbarSecondary.scss";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";

const NavbarSecondary = (props) => {
  const { text, total, closeModal } = props;
  const fullText = total ? `Sacola (${total})` : text;

  return (
    <div className="navbar-secondary">
      <div className="navbar-secondary__arrow">
        <BackArrowIcon closeFunction={closeModal} />
      </div>
      <p className="navbar-secondary__total">{fullText}</p>
    </div>
  );
};

NavbarSecondary.propTypes = {
  total: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default NavbarSecondary;

import React from "react";
import PropTypes from "prop-types";

import "./NavbarSecondary.scss";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";

const NavbarSecondary = (props) => {
  const { total, closeModal } = props;
  const text = `Sacola (${total})`;

  return (
    <div className="navbar-secondary">
      <div className="navbar-secondary__arrow">
        <BackArrowIcon closeFunction={closeModal}/>
      </div>
      <p className="navbar-secondary__total">{text}</p>
    </div>
  );
};

NavbarSecondary.propTypes = {
  total: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default NavbarSecondary;

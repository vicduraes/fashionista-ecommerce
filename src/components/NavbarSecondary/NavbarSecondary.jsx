import React from "react";
import PropTypes from "prop-types";

import "./NavbarSecondary.scss";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";

const NavbarSecondary = (props) => {
  const { total } = props;
  const text = `Sacola ${total}`;

  return (
    <div className="navbar-secondary">
      <BackArrowIcon />
      <p className="navbar-secondary__total">{text}</p>
      <div className="navbar-secondary__empty" />
    </div>
  );
};

NavbarSecondary.propTypes = {
  total: PropTypes.number.isRequired,
};

export default NavbarSecondary;

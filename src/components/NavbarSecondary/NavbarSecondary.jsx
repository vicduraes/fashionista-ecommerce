import React from "react";

import "./NavbarSecondary.scss";
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon";

const NavbarSecondary = (props) => {
    return (
        <div className="navbar-secondary">
            <BackArrowIcon />
            <p className="navbar-secondary__total">Sacola ({props.total})</p>
            <div className="navbar-secondary__empty"></div>
        </div>
    );
}

export default NavbarSecondary;
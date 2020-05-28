import React from "react";

import "./Subtotal.scss";

const Subtotal = (props) => {
    return (
        <div className="subtotal">
            <p className="subtotal__value">Subtotal - {props.value}</p>
        </div>
    );
}

export default Subtotal;
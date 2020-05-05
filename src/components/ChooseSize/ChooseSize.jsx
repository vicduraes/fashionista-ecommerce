import React from 'react';

import './ChooseSize.scss';

const ChooseSize = () =>{
    return (
        <div className = "field-choose-size">
            <span>Escolha o tamanho:</span>
            <div className = "field-choose-size__button">
                <button className= "field-choose-size__size-button">P</button>
                <button className= "field-choose-size__size-button">M</button>
                <button className= "field-choose-size__size-button">G</button>
            </div>
        </div>
    )

};

export default ChooseSize;
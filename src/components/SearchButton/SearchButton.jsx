import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

import "./SearchButton.scss";

const SearchButton = () => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <button className="search-button" onClick={openModal}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <Modal closeModal={closeModal} show={show} />
    </>
  );
};

export default SearchButton;

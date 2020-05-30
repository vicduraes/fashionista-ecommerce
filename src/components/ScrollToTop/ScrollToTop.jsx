import React, { useRef, useEffect, useState } from "react";
import "./ScrollToTop.scss";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetBottom);

const useHideOnScrolled = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHidden(top !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hidden;
};

const ScrollToTop = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const isHidden = useHideOnScrolled();
  const arrowUpIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="30px"
      height="30px"
    >
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  return isHidden ? (
    <button
      type="button"
      className="scroll-to-top"
      ref={myRef}
      onClick={executeScroll}
    >
      {arrowUpIcon}
    </button>
  ) : null;
};

export default ScrollToTop;

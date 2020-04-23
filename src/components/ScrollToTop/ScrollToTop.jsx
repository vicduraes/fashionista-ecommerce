import React, { useRef } from "react";
import './ScrollToTop.css';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetBottom)

const ScrollToTop = () => {

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    
    return <div className="scroll-to-top" ref={myRef}><button onClick={executeScroll}>^</button></div>;
        
};
    
export default ScrollToTop;
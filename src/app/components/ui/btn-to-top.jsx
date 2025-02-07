"use client";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnToTop = () => {
  const [state, setState] = useState();

  useEffect(() => {
    function handleScroll() {
      setState(window.scrollY > 200 ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setState]);

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={state}
      unmountOnExit
      timeout={500}
      classNames="btn-to-top"
      nodeRef={nodeRef}
    >
      <button
        ref={nodeRef}
        className="btn-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </CSSTransition>
  );
};

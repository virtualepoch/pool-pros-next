"use client";
import { useState, useEffect } from "react";
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

  return (
    <CSSTransition
      in={state}
      unmountOnExit
      timeout={500}
      classNames="btn-to-top"
    >
      <button
        className="btn-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </CSSTransition>
  );
};

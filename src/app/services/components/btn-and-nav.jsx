"use client";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnAndNav = ({ styles }) => {
  const [state, setState] = useState();
  const [anim, setAnim] = useState();

  useEffect(() => {
    function handleScroll() {
      setState(window.scrollY > 0 ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setState]);

  useEffect(() => {
    setTimeout(() => setAnim(state), 1);
  }, [setAnim, state]);

  return (
    <CSSTransition in={state} unmountOnExit timeout={500}>
      <button
        className={styles.btnNavServices}
        style={{
          transform: `translateY(-${anim ? 0 : 100}%)`,
          opacity: anim ? 1 : 0,
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </CSSTransition>
  );
};

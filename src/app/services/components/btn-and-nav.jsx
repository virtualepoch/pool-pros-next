"use client";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnAndNav = ({ styles }) => {
  const [state, setState] = useState();

  useEffect(() => {
    function handleScroll() {
      setState(window.scrollY > window.innerHeight ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setState]);

  ///////////////////////////////////////////////////////

  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => setAnim(state), 1);
  }, [setAnim, state]);

  //////////////////////////////////////////////////////

  const [nav, setNav] = useState();
  const [open, setOpen] = useState();

  useEffect(() => {
    setTimeout(() => setOpen(nav), 1);
  }, [setOpen, nav]);

  return (
    <>
      <CSSTransition in={state} unmountOnExit timeout={500}>
        <button
          className={
            nav
              ? `${styles.btnNavServices} ${styles.open}`
              : styles.btnNavServices
          }
          style={{
            transform: `translateY(-${anim ? 0 : 100}%)`,
            opacity: anim ? 1 : 0,
          }}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <div className={styles.btnNavServicesIcon} />
        </button>
      </CSSTransition>

      <CSSTransition in={nav} unmountOnExit timeout={500}>
        <nav
          className={styles.navServices}
          style={{
            // transform: `translateY(-${open ? 0 : 100}%)`,
            opacity: open ? 1 : 0,
            transition: `opacity ${open ? 1 : 0}s ease`,
          }}
        >
          <ul>
            <li>
              <a href="#pool-cleaning">Pool Cleaning</a>
            </li>
            <li>Spa Cleaning</li>
            <li>Pool Maintenance</li>
            <li>Spa Maintenance</li>
            <li>Technical Services</li>
            <li>Pool Openings</li>
            <li>Pool Closing</li>
          </ul>
        </nav>
      </CSSTransition>
    </>
  );
};

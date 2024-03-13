"use client";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnAndNav = ({ styles }) => {
  const [pressed, setPressed] = useState();
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
    <div className={styles.btnAndNavWrap}>
      <CSSTransition in={state} unmountOnExit timeout={500}>
        <button
          className={
            nav
              ? `${styles.btnNavServices} ${styles.open}`
              : styles.btnNavServices
          }
          onClick={() => {
            setNav(!nav);
          }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onTouchStart={() => setPressed(true)}
          onTouchEnd={() => setPressed(false)}
          // onMouseEnter={() => setNav(true)}
          // onMouseLeave={() => setNav(false)}
          style={{
            opacity: anim ? 1 : 0,
            transform: `translateY(-${anim ? 0 : 100}%)`,
            boxShadow:
              pressed | open
                ? "inset 2px 2px 1px 1px #0ff5"
                : "inset 1px 1px 1px 1px #0ff7, inset -1px -1px 2px 1px #0222, 1px 2px 10px 1px #0007",
            transition: `opacity 500ms ease, transform 500ms ease`,
          }}
        >
          <div className={styles.btnNavServicesIcon} />
        </button>
      </CSSTransition>

      <CSSTransition in={nav && state} unmountOnExit timeout={700}>
        <>
          <button
            className={styles.navServicesBtnBg}
            onTouchStart={() => setNav(false)}
          />

          <nav
            className={styles.navServices}
            onMouseEnter={() => setNav(true)}
            onMouseLeave={() => setNav(false)}
            style={{
              opacity: open && state ? 1 : 0,
              transform: `translateY(-${open && state ? 0 : 25}%)`,
              transition: `opacity ${
                open && state ? 700 : 400
              }ms ease, transform 500ms ease`,
            }}
          >
            <ul>
              <li
                // LINK OPENINGS /////////////////////////////////////
                style={{
                  backgroundImage: "url(/gallery/10.jpg)",
                  backgroundPosition: "50% 40%",
                }}
              >
                <a href="#pool-openings" onClick={() => setNav(false)}>
                  Pool Openings
                </a>
                <div className={styles.linkArrow} />
              </li>

              <li
                // LINK CLEANING /////////////////////////////////////
                style={{
                  backgroundImage: "url(/gallery/0.jpg)",
                  backgroundPosition: "20% 40%",
                }}
              >
                <a href="#pool-spa-cleaning" onClick={() => setNav(false)}>
                  Pool & Spa Cleaning
                </a>
                <div className={styles.linkArrow} />
              </li>

              <li
                // LINK MAINTENANCE /////////////////////////////////////
                style={{
                  backgroundImage: "url(/services/2.jpg)",
                  backgroundPosition: "100% 50%",
                }}
              >
                <a href="#pool-spa-maintenance" onClick={() => setNav(false)}>
                  Pool & Spa Maintenance
                </a>
                <div className={styles.linkArrow} />
              </li>

              <li
                // LINK TECHNICAL SERVICES /////////////////////////////////////
                style={{
                  backgroundImage: "url(/home/tech-1024.jpg)",
                  backgroundPosition: "50% 70%",
                }}
              >
                <a href="#technical-services" onClick={() => setNav(false)}>
                  Technical Services
                </a>
                <div className={styles.linkArrow} />
              </li>

              <li
                // LINK CLOSINGS /////////////////////////////////////
                style={{
                  backgroundImage: "url(/gallery/2.jpeg)",
                  backgroundPosition: "50% 60%",
                }}
              >
                <a href="#pool-closings" onClick={() => setNav(false)}>
                  Pool Closings
                </a>
                <div className={styles.linkArrow} />
              </li>
            </ul>
          </nav>
        </>
      </CSSTransition>
    </div>
  );
};

"use client";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const links = [
  {
    linkName: "Pool Openings",
    linkUrl: "#pool-openings",
  },
  {
    linkName: "Pool & Spa Cleaning",
    linkUrl: "#pool-cleaning",
  },
  {
    linkName: "Pool & Spa Maintenance",
    linkUrl: "#pool-maintenance",
  },
  {
    linkName: "Technical Services",
    linkUrl: "#technical-services",
  },
  {
    linkName: "Pool Closings",
    linkUrl: "#pool-closings",
  },
];

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
    <>
      <CSSTransition in={state} unmountOnExit timeout={500}>
        <button
          className={
            nav
              ? `${styles.btnNavServices} ${styles.open}`
              : styles.btnNavServices
          }
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onTouchStart={() => setPressed(true)}
          onTouchEnd={() => setPressed(false)}
          onMouseEnter={() => setNav(true)}
          onMouseLeave={() => setNav(false)}
          style={{
            opacity: anim ? 1 : 0,
            transform: `translateY(-${anim ? 0 : 100}%)`,
            boxShadow: pressed ? "none" : "1px 2px 10px 1px #0007",
            transition: `opacity 500ms ease, transform 500ms ease`,
          }}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <div className={styles.btnNavServicesIcon} />
        </button>
      </CSSTransition>

      <CSSTransition in={nav && state} unmountOnExit timeout={700}>
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
            {links.map((links) => (
              <li key={links.linkName}>
                <a href={links.linkUrl} onClick={() => setNav(false)}>
                  {links.linkName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </CSSTransition>
    </>
  );
};

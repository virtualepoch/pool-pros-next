"use client";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnAndNav = ({ styles, services }) => {
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
            boxShadow: pressed | open ? "none" : "1px 2px 10px 1px #0007",
            transition: `opacity 500ms ease, transform 500ms ease`,
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
            {services.map((services) => (
              <li
                key={services.id}
                style={{
                  backgroundImage: `url(${services.headerImage})`,
                  backgroundPosition: services.headerImagePosition,
                }}
              >
                <a href={services.url} onClick={() => setNav(false)}>
                  {services.header}
                </a>
                <div className={styles.linkArrow} />
              </li>
            ))}
          </ul>
        </nav>
      </CSSTransition>
    </div>
  );
};

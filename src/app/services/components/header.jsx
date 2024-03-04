"use client";
import { useState, useEffect } from "react";
import { BtnAndNav } from "./btn-and-nav";

export const Header = ({ styles }) => {
  const [state, setState] = useState();

  useEffect(() => {
    function handleScroll() {
      setState(window.scrollY > window.innerHeight ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setState]);

  return (
    <div className={styles.routeHeader}>
      <div className={styles.btnAndNavWrap}>
        <BtnAndNav styles={styles} />
      </div>

      <div className={styles.headerTextWrap}>
        <p
          className={styles.headerText}
          style={{
            left: state ? "60px" : "calc(50% - 90px)",
            transition: "left 700ms ease",
          }}
        >
          Services
        </p>
      </div>
    </div>
  );
};

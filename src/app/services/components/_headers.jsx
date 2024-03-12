"use client";
import { useRef, useState, useEffect } from "react";

export const Headers = ({ styles, services }) => {
  const [state, setState] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleScroll() {
      setState(ref.current.scrollTop == 0 ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setState]);

  return (
    <>
      <h3
        ref={ref}
        className={styles.header}
        style={{
          backgroundImage: `url(${services.headerImage})`,
          backgroundPosition: services.headerImagePosition,
          // border: state ? "solid red" : "none",
          // boxShadow: state ? "0 0 5px 1px #000a" : "none",
        }}
      >
        {(services.id === "pool-spa-maintenance") |
        (services.id === "pool-spa-cleaning")
          ? services.headerShort
          : services.header}
      </h3>

      <h3 className={styles.subHeader}>{services.subHeader}</h3>
    </>
  );
};

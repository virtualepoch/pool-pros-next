"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnScreen } from "../../_functions/use-on-screen";

import styles from "./intro.module.css";

export const Intro = ({ services }) => {
  const ref = useRef();
  const [inView, setInView] = useState();

  useOnScreen(ref, () => setInView(true), {
    rootMargin: "",
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={styles.intro}
      style={{
        color: services.id === "pool-spa-cleaning" ? "#fff" : "#fff",
        textShadow:
          services.id === "pool-spa-cleaning"
            ? "0 0 4px #000,0 0 4px #000"
            : "0 0 4px #000",
        boxShadow:
          services.id === "pool-spa-cleaning"
            ? "inset 0 2px 10px 1px #fffa"
            : "inset 0 2px 10px 1px #000a",
      }}
    >
      <p
        className={styles.introText}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(50px)",
          backgroundColor:
            services.id === "pool-spa-cleaning"
              ? "none"
              : inView
              ? "#0008"
              : "none",
          transition:
            "opacity 700ms linear, transform 500ms ease, background-color 300ms linear 300ms",
        }}
      >
        {services.intro}

        <br />
        <br />

        {services.intro2}

        {services.id === "pool-spa-cleaning" && (
          <>
            <br />
            <br />

            {services.intro3}
          </>
        )}

        {services.id === "pool-closings" && (
          <>
            <br />

            {services.intro3}
          </>
        )}
      </p>

      <Image
        className={styles.introImage}
        style={{ objectPosition: services.introImagePosition }}
        width={640}
        height={480}
        src={services.introImage}
        alt="Services page image"
      />
    </div>
  );
};

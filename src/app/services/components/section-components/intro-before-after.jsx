"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnScreen } from "../../../_functions/use-on-screen";

import styles from "./intro.module.css";

export const IntroBeforeAfter = ({ services }) => {
  const ref = useRef();
  const [inView, setInView] = useState();

  useOnScreen(ref, () => setInView(true), {
    rootMargin: "",
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={styles.intro}>
      <Image
        className={styles.introUnderlay}
        style={{
          objectPosition: services.introImagePosition,
        }}
        width={640}
        height={480}
        src={services.introImage}
        alt="Services page image"
      />

      <Image
        className={styles.introOverlay}
        style={{
          objectPosition: services.introImageAfterPosition,
        }}
        width={640}
        height={480}
        src={services.introImageAfter}
        alt="Services page image"
      />

      <p
        className={styles.introText}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(50px)",
          backgroundColor: inView ? "#0008" : "none",
          transition:
            "opacity 700ms linear, transform 500ms ease, background-color 700ms ease-in 300ms",
        }}
      >
        {services.intro}
        <br />
        <br />
        {services.intro2}
      </p>
    </div>
  );
};

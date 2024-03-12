"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useOnScreen } from "../../_functions/use-on-screen";

export const IntroBeforeAfter = ({ styles, children }) => {
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
          objectPosition: "50% 100%",
        }}
        width={640}
        height={480}
        src="/services/maintenance.jpg"
        alt="Services page image"
      />

      <Image
        className={styles.introOverlay}
        style={{
          objectPosition: "50% 70%",
        }}
        width={640}
        height={480}
        src="/services/maintenance2.jpg"
        alt="Services page image"
      />

      <div
        className={styles.introText}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(50px)",
          backgroundColor: inView ? "#0008" : "none",
          transition:
            "opacity 700ms linear, transform 500ms ease, background-color 700ms ease-in 300ms",
        }}
      >
        {children}
      </div>
    </div>
  );
};

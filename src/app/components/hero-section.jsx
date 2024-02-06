"use client";
import { useEffect, useState } from "react";

export const HeroSection = ({ styles }) => {
  const [anim1, setAnim1] = useState();
  const [anim2, setAnim2] = useState();

  useEffect(() => {
    setTimeout(() => setAnim1(true), 1);
    setTimeout(() => setAnim2(true), 500);
  }, [setAnim1, setAnim2]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.flexWrap}>
        <div
          className={styles.heroHeaderWrap}
          style={{
            opacity: anim1 ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <h1
            className={styles.heroHeader}
            style={{
              opacity: anim1 ? 1 : 0,
              transform: anim1 ? "none" : "translateY(50%)",
              transition: "transform 1s ease, opacity 1s ease",
            }}
          >
            Your Pool and Spa Specialists
          </h1>
        </div>

        <div className={styles.heroServicesListWrap}>
          <ul
            className={styles.heroServicesList}
            style={{
              opacity: anim2 ? 1 : 0,
              transform: anim2 ? "none" : "translateY(50%)",
              transition: "transform 1s ease, opacity 1s ease",
            }}
          >
            <li>Cleaning</li>
            <li>Maintenance</li>
            <li>Technical Services</li>
            <li>Openings and Closings</li>
          </ul>
        </div>
      </div>

      <h2
        className={styles.heroStatement}
        style={{
          opacity: anim2 ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        Providing Service to the{" "}
        <span
          style={{ textTransform: "uppercase", textDecoration: "underline" }}
        >
          Boise Metro Area
        </span>{" "}
        since 2010.
      </h2>

      <div
        className={styles.heroImg}
        style={{
          opacity: anim1 ? 1 : 0,
          transition: "opacity 1.5s ease",
        }}
      />
    </section>
  );
};

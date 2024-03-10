"use client";
import { useEffect, useState } from "react";

export const HeroList = ({ styles, children }) => {
  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => setAnim(true), 500);
  });

  return (
    <div className={styles.heroServicesListWrap}>
      <ul
        className={styles.heroServicesList}
        style={{
          opacity: anim ? 1 : 0,
          transform: anim ? "none" : "translateY(50%)",
          transition: "transform 1s ease, opacity 1s ease",
        }}
      >
        {children}
      </ul>
    </div>
  );
};

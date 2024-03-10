"use client";
import { useEffect, useState } from "react";

export const AnimOpacityTranslateY = ({ delay = 1, className, children }) => {
  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => setAnim(true), delay);
  });

  return (
    <div
      className={className}
      style={{
        opacity: anim ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      <div
        style={{
          opacity: anim ? 1 : 0,
          transform: anim ? "none" : "translateY(50%)",
          transition: "transform 1s ease, opacity 1s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};

"use client";
import { useRef, useState } from "react";
import { useOnScreen } from "../../_functions/use-on-screen";

export const InViewOpacity = ({ className, rootMargin = "", threshold = 0.5, opacitySpeed = "700ms", children }) => {
  const ref = useRef();
  const [inView, setInView] = useState();

  useOnScreen(ref, () => setInView(true), {
    rootMargin: rootMargin,
    threshold: threshold,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity ${opacitySpeed} ease`,
      }}
    >
      {children}
    </div>
  );
};

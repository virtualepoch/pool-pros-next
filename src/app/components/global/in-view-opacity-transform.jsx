"use client";
import { useRef, useState } from "react";
import { useOnScreen } from "../../_functions/use-on-screen";

export const InViewOpacityTransform = ({
  className,
  rootMargin = "",
  threshold = 0.1,
  translateY = "50px",
  opacitySpeed = "700ms",
  transformSpeed = "500ms",
  children,
}) => {
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
        transform: inView ? "none" : `translateY(${translateY})`,
        transition: `opacity ${opacitySpeed} ease, transform ${transformSpeed} ease`,
      }}
    >
      {children}
    </div>
  );
};

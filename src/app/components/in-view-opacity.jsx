"use client";
import { useInView } from "react-intersection-observer";

export const InViewOpacity = ({ children, opacitySpeed = "700ms" }) => {
  const { ref, inView } = useInView({
    rootMargin: "-20%",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity ${opacitySpeed} ease`,
      }}
    >
      {children}
    </div>
  );
};

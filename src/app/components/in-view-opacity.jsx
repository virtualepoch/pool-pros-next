"use client";
import { useInView } from "react-intersection-observer";

export const InViewOpacity = ({
  rootMargin = "-20%",
  triggerOnce = true,
  opacitySpeed = "700ms",
  children,
}) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
  });

  return (
    <div
      ref={ref}
      style={{
        width: "inherit",
        height: "inherit",
        opacity: inView ? 1 : 0,
        transition: `opacity ${opacitySpeed} linear`,
      }}
    >
      {children}
    </div>
  );
};

"use client";
import { useInView } from "react-intersection-observer";

export const InViewOpacityTransform = ({
  className,
  children,
  opacitySpeed = "700ms",
  transformSpeed = "500ms",
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    rootMargin: "0%",
    triggerOnce: triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(50%)",
        transition: `opacity ${opacitySpeed} ease, transform ${transformSpeed} ease`,
      }}
    >
      {children}
    </div>
  );
};

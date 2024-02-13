"use client";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export const InViewSpringOpacity = ({
  rootMargin = "-20%",
  triggerOnce = true,
  children,
}) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
  });

  const [springs] = useSpring(
    () => ({
      opacity: inView ? 1 : 0,
      config: {
        mass: 1,
        tension: 320,
        friction: 60,
      },
    }),
  );

  return (
    <animated.div
      ref={ref}
      style={{ springs, width: "fit-content", height: "fit-content" }}
    >
      {children}
    </animated.div>
  );
};

"use client";
import { useInView, animated } from "@react-spring/web";

export const SpringInView = ({
  className,
  children,
  rootMargin = "-30% 0%",
}) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: rootMargin,
    }
  );

  return (
    <animated.div ref={ref} className={className} style={springs}>
      {children}
    </animated.div>
  );
};

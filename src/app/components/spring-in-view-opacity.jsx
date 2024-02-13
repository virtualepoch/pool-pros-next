"use client";
import { useInView, animated } from "@react-spring/web";

export const SpringInViewOpacity = ({
  className,
  children,
  rootMargin = "-10% 0%",
}) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        y: 100,
        opacity: 0,
      },
      to: {
        y: 0,
        opacity: 1,
        config: (key) => {
          if (key === "y") {
            return {
              mass: 1,
              tension: 120,
              friction: 14,
            };
          }
          if (key === "opacity") {
            return {
              mass: 1,
              tension: 320,
              friction: 60,
            };
          }
          return {};
        },
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

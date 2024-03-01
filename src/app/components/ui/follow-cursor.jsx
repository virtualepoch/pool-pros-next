"use client";
import { useEffect, useState } from "react";

export const FollowCursor = ({
  delay = 400,
  // timing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)";
  timing = "cubic-bezier(0.175, 0.885, 0.320, 2.575)",
  children,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //   let curX = 0;
  //   let curY = 0;
  //   let tgX = 0;
  //   let tgY = 0;

  useEffect(() => {
    const updatePosition = (e) => {
      // THE FOLLOWING CODE ADDS A DELAY BUT THE TRANSITION SEEMS TO WORK FINE SO WENT WITHOUT
      // curX += (tgX - curX) / 20;
      // curY += (tgY - curY) / 20;
      setPosition({ x: e.clientX, y: e.clientY });

      requestAnimationFrame(() => {
        updatePosition;
      });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        position: "fixed",
        // top: window.innerWidth > 1400 ? position.y : 0,
        // left: window.innerWidth > 1400 ? position.x : 0,
        top: position.y,
        left: position.x,
        zIndex: 101010,
        transform: "translate(-50%,-50%)",
        transition: `top ${delay}ms ${timing}, left ${delay}ms ${timing}`,
      }}
    >
      {children}
    </div>
  );
};

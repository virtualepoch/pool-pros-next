"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ParallaxBg = ({ src, alt, width, height, objectPosition }) => {
  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => setAnim(true), 1);
  }, [setAnim,]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-bg">
      <Image
        className="parallax-bg-img"
        priority
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          opacity: anim ? 1 : 0,
          transition: "opacity 1.5s ease",
          transform: `translateY(-${scrollPosition / 2}px)`,
          objectPosition: objectPosition,
        }}
      />
    </div>
  );
};

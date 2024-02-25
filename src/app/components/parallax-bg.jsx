"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ParallaxBg = ({ src, alt, width, height, objectPosition }) => {
  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => setAnim(true), 1);
  }, [setAnim]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    opacity: anim ? 1 : 0,
    transition: "opacity 1.5s ease",
    objectPosition: objectPosition,
    transform: `translateY(${scrollY / 2}px)`,
  };

  return (
    <Image
      className="parallax-bg-img"
      priority
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={parallaxStyle}
    />
  );
};

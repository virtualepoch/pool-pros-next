"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { Parallax } from "react-scroll-parallax";

export const ParallaxBg = ({ src, alt, width, height, objectPosition }) => {
  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => setAnim(true), 1);
  }, [setAnim]);

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const parallaxStyle = {
    opacity: anim ? 1 : 0,
    transition: "opacity 1.5s ease",
  };

  const imgStyle = {
    // transform: `translateY(-${scrollY / 1.5}px)`,
    objectPosition: objectPosition,
  };

  return (
    <div className="parallax-bg" style={parallaxStyle}>
      <Image
        className="parallax-bg-img"
        priority
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={imgStyle}
      />
    </div>
  );
};

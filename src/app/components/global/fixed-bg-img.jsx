"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const FixedBgImg = ({ src, alt, width, height, objectPosition }) => {
  const [anim, setAnim] = useState();

  useEffect(() => {
    setTimeout(() => setAnim(true), 1);
  }, [setAnim]);

  return (
    <Image
      className="fixed-bg-img"
      priority
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        opacity: anim ? 1 : 0,
        transition: "opacity 1s ease",
        objectPosition: objectPosition,
      }}
    />
  );
};

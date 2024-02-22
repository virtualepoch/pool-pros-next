"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { url: "/home/pool-1024.jpg", alt: "image one", width: 1024, height: 2164 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
  { url: "/gallery/3.jpeg", alt: "image one", width: 1024, height: 2164 },
];

export const LandingBg = ({ styles }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(() => 5000);
    }, 1);

    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, time);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className={styles.landingBg}>
      {images.map((images, index) => (
        <Image
          className={
            imageIndex === index
              ? `${styles.backgroundImg} ${styles.active}`
              : styles.backgroundImg
          }
          priority
          key={images.url}
          src={images.url}
          alt={images.alt}
          width={images.width}
          height={images.height}
          aria-hidden={imageIndex !== index}
        />
      ))}
    </div>
  );
};

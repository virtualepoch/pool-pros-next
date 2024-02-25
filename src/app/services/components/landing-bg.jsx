"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { url: "/gallery/0.jpeg", alt: "image one", width: 1024, height: 2164 },
  { url: "/gallery/7.png", alt: "image one", width: 1024, height: 2164 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
];

export const LandingBg = ({ styles }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.landingBg}>
      {images.map((images, index) => (
        <Image
          className={
            imageIndex === index
              ? `${styles.backgroundImg} ${styles.active}`
              : styles.backgroundImg
          }
          style={{
            transform: `translateY(${scrollY / 2}px)`,
          }}
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

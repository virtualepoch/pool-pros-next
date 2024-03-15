"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./bg-imgs-anim-zoom.module.css";

export const ZoomBg = ({ images }) => {
  const [state, setState] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setState(true);

    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className={
        state ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      {images.map((images, index) => (
        <Image
          className={
            imageIndex === index
              ? `${styles.image} ${styles.active}`
              : styles.image
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

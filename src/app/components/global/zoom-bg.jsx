"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./zoom-bg.module.css";

export const ZoomBg = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.container}>
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

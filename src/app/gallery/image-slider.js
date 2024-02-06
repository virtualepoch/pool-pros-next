"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageSlider = ({ styles, images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [btnLeftHovered, setBtnLeftHovered] = useState(false);
  const [btnRightHovered, setBtnRightHovered] = useState(false);

  const [imgBtnsTrans, setImgBtnsTrans] = useState();

  useEffect(() => {
    setTimeout(() => {
      setImgBtnsTrans(true);
    }, 400);
  }, [setImgBtnsTrans]);

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  return (
    <section className={styles.imageSlider} aria-label="Image Slider">
      <a href="#after-image-slider-controls" className={styles.skipLink}>
        Skip image slider controls
      </a>

      <div className={styles.wrapperImages}>
        {images.map((images, index) => (
          <Image
            key={images.url}
            src={images.url}
            alt={images.alt}
            aria-hidden={imageIndex !== index}
            className={styles.imgImageSlider}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
            width={640}
            height={480}
          />
        ))}
      </div>

      <button
        className={styles.btnSlider}
        aria-label="View previous image"
        onClick={showPrevImage}
        onTouchStart={() => setBtnLeftHovered(true)}
        onTouchEnd={() => setBtnLeftHovered(false)}
      />
      <div
        className={styles.iconBtnSlider}
        style={{ borderColor: `${btnLeftHovered ? "#0ff" : "transparent"}` }}
      />

      <button
        className={styles.btnSliderRight}
        aria-label="View next image"
        onClick={showNextImage}
        onTouchStart={() => setBtnRightHovered(true)}
        onTouchEnd={() => setBtnRightHovered(false)}
      />
      <div
        className={styles.iconBtnSliderRight}
        style={{ borderColor: `${btnRightHovered ? "#0ff" : "transparent"}` }}
      />

      <div
        className={styles.wrapperBtnsImg}
        style={{
          transform: `translateY(${imgBtnsTrans ? 0 : 100}%)`,
          opacity: imgBtnsTrans ? 1 : 0,
        }}
      >
        {images.map((images, index) => (
          <button
            key={index}
            className={styles.btnImg}
            aria-label={`View image ${index + 1}`}
            onClick={() => setImageIndex(index)}
            style={{
              background: `url(${images.url}) center / cover no-repeat`,
              transform: `scale(${index === imageIndex ? 1.2 : 1})`,
              border: index === imageIndex && "2px solid #0ff",
            }}
          />
        ))}
      </div>

      <div id="after-image-slider-controls" />
    </section>
  );
};

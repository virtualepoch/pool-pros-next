"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  return (
    <section className="image-slider" aria-label="Image Slider">
      <a href="#after-image-slider-controls" className={styles.skipLink}>
        Skip image slider controls
      </a>

      <div>
        <Swiper
          className="swiper_container"
          // className={styles.wrapperImages}
          loop
          grabCursor
          centeredSlides
          slidesPerView="auto"
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-btn-prev-slide",
            prevEl: ".swiper-btn-next-slide",
            clickable: true,
          }}
        >
          {images.map((images, index) => (
            <SwiperSlide key={images.url} className="swiper-slide">
              <Image
                className="swiper-slide-img"
                width={640}
                height={480}
                src={images.url}
                alt={images.alt}
              />
            </SwiperSlide>
          ))}

          <div className="swiper-pag-container">
            <button
              className="swiper-btn swiper-btn-prev-slide"
              aria-label="View previous image"
              onTouchStart={() => setBtnLeftHovered(true)}
              onTouchEnd={() => setBtnLeftHovered(false)}
            />

            <div className="swiper-pagination" />

            <button
              className="swiper-btn swiper-btn-next-slide"
              aria-label="View next image"
              onTouchStart={() => setBtnRightHovered(true)}
              onTouchEnd={() => setBtnRightHovered(false)}
            />
          </div>
        </Swiper>
      </div>

      {/* <div
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
      </div> */}

      <div id="after-image-slider-controls" />
    </section>
  );
};

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const ImageSlider = ({ styles, images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

      <Swiper
        className="swiper_container"
        // className={styles.wrapperImages}
        style={{
          "--swiper-navigation-color": "#0ffa",
          "--swiper-pagination-color": "#0ffa",
        }}
        loop
        grabCursor
        navigation
        centeredSlides
        watchSlidesProgress
        slidesPerView="auto"
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectCoverflow, FreeMode, Navigation, Thumbs]}
      >
        {images.map((images) => (
          <SwiperSlide key={images.url}>
            <Image
              className="swiper-slide-img"
              width={640}
              height={480}
              src={images.url}
              alt={images.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-thumbnails"
      >
        {images.map((images) => (
          <SwiperSlide key={images.url} className="swiper-thumbnails-slide">
            <Image
              className="swiper-thumbnails-img"
              width={640}
              height={480}
              src={images.url}
              alt={images.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div id="after-image-slider-controls" />
    </section>
  );
};

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const ImageSlider = ({ images }) => {
  const [btnPrevHov, setBtnPrevHov] = useState(null);
  const [btnNextHov, setBtnNextHov] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [op, setOp] = useState(null);
  useEffect(() => {
    setOp(true);
  }, [setOp]);

  return (
    <section
      className="image-slider"
      aria-label="Image Slider"
      style={{ opacity: op ? 1 : 0, transition: "opacity 400ms linear" }}
    >
      <Swiper
        className="swiper_container"
        style={{
          "--swiper-navigation-color": "#0ffa",
        }}
        loop
        // speed={500}
        grabCursor
        navigation={{
          prevEl: ".swiper-btn-prev",
          nextEl: ".swiper-btn-next",
        }}
        centeredSlides
        watchSlidesProgress
        slidesPerView="auto"
        initialSlide={1}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 4,
          slideShadows: false,
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

        <div
          className="swiper-btn-prev"
          onTouchStart={() => {
            setBtnPrevHov(true);
          }}
          onTouchEnd={() => {
            setBtnPrevHov(false);
          }}
          style={{
            backgroundColor: btnPrevHov & "#0002",
          }}
        />
        <div
          className="swiper-btn-next"
          onTouchStart={() => {
            setBtnNextHov(true);
          }}
          onTouchEnd={() => {
            setBtnNextHov(false);
          }}
          style={{
            backgroundColor: btnNextHov & "#0002",
          }}
        />
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={7}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-thumbnails-wrap"
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
    </section>
  );
};

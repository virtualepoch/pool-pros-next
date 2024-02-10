"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const ImageSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="image-slider" aria-label="Image Slider">
      <Swiper
        className="swiper_container"
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
        initialSlide={1}
        speed={500}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 4,
          slideShadows: false,
        }}
        thumbs={{ swiper: thumbsSwiper, autoScrollOffset: 2 }}
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
    </section>
  );
};

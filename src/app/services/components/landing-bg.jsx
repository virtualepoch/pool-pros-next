"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  { url: "/home/pool-1024.jpg", alt: "image one", width: 1024, height: 2164 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
  { url: "/gallery/3.jpeg", alt: "image one", width: 1024, height: 2164 },
];

export const LandingBg = ({ styles }) => {
  return (
    <Swiper
      className={styles.backgroundSwiper}
      centeredSlides
      crossFade
      autoplay={{ delay: 5000 }}
      effect="fade"
      modules={[EffectFade, Autoplay]}
    >
      {images.map((images) => (
        <SwiperSlide key={images.url}>
          <Image
            className={styles.backgroundImg}
            src={images.url}
            alt={images.alt}
            width={images.width}
            height={images.height}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

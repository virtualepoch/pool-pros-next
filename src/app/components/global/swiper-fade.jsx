"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export const SwiperFade = ({ styles, images }) => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        style={{
          "--swiper-navigation-color": "#0ffa",
        }}
        loop
        navigation
        effect="fade"
        modules={[EffectFade, Navigation]}
      >
        {images.map((images, index) => (
          <SwiperSlide key={images.url}>
            <Image
              priority
              className={styles.image}
              src={images.src}
              alt="Boise Pool Pros Pools Before/After"
              width={512}
              height={512}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

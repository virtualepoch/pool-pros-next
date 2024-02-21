import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
// import { ParallaxLayer } from "@react-spring/parallax";

import "swiper/css";
import "swiper/css/effect-fade";

export const Background = ({ styles, images }) => {
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

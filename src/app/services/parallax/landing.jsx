import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

export const Landing = ({ styles, images }) => {
  return (
    <ParallaxLayer factor={1} offset={0} speed={0} className={styles.landing}>
     
        <h2 className={styles.heroStatement}>
          The Boise Pool Pros are <span>certified</span>, <span>insured</span>,
          and <span>experienced</span> pool and spa professionals.
        </h2>
     

      <Swiper
        className={styles.landingSwiper}
        centeredSlides
        crossFade
        autoplay={{ delay: 5000 }}
        effect="fade"
        modules={[EffectFade, Autoplay]}
      >
        {images.map((images) => (
          <SwiperSlide key={images.url}>
            <Image
              className={styles.landingImg}
              src={images.url}
              alt={images.alt}
              width={images.width}
              height={images.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ParallaxLayer>
  );
};

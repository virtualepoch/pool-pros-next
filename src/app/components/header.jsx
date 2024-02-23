"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const images = [
  { src: "/globals/site-logo.png" },
  { src: "/t/1.webp" },
  { src: "/t/2.png" },
  { src: "/t/3.png" },
  { src: "/t/4.webp" },
  { src: "/t/5.webp" },
];

export const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="site-logo-link"></Link>

      <Swiper
        className="swiper-logo-test"
        style={{
          "--swiper-navigation-color": "#0ffa",
        }}
        loop
        // speed={500}
        grabCursor
        navigation
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
        modules={[EffectCoverflow, FreeMode, Navigation]}
      >
        {images.map((images, index) => (
          <SwiperSlide key={images.url}>
            <div className="logo-testing-wrap">
              <div className="logo-testing-number">{index}</div>
              <Image
                priority
                className="logo-testing"
                src={images.src}
                alt="Boise Pool Pros Logo"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="header-phone-number">(208)475-4344</p>
    </header>
  );
};

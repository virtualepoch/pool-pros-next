"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const images = [
  { src: "/t/1.png" },
  { src: "/t/2.png" },
  { src: "/t/3.png" },
  { src: "/t/4.png" },
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
        navigation
        effect="fade"
        modules={[EffectFade, Navigation]}
      >
        {images.map((images, index) => (
          <SwiperSlide key={images.url}>
            <div className="logo-testing-wrap">
              <div className="logo-testing-number">{index + 1}</div>
              <Image
                priority
                className="logo-testing"
                src={images.src}
                alt="Boise Pool Pros Logo"
                width={512}
                height={512}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="header-phone-number">(208)475-4344</p>
    </header>
  );
};

"use client";
import { useEffect } from "react";
import { initializeGoogleTagManager } from "./components/googleTagManager";
import { FixedBgImg } from "./components/global/fixed-bg-img";
import { HeroSection } from "./components/global/hero-section";
import { BtnAndModalContact } from "./components/ui/btn-and-modal-contact";
import { Section } from "./components/global/section";
import { SwiperAutoFlow } from "./components/global/swiper-auto-flow";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    initializeGoogleTagManager("G-8BZ8QJ3NEW");
  }, []);

  return (
    <>
      <FixedBgImg
        src="/gallery/9.jpg"
        alt="Hero image for home page- a glistening pool."
        width={900}
        height={598}
        objectPosition="50% 100%"
      />

      <HeroSection styles={styles} />

      <BtnAndModalContact />

      <Section
        header="Pool Openings"
        assurance="As the warmer days approach, the anticipation of diving into a clear, sparkling pool becomes irresistible. At Boise Pool Pros, we specialize in turning that anticipation into reality with our professional pool opening services."
        logoSrc="/globals/cpo.jpg"
        logoAlt="CPO Logo"
        logoWidth={426}
        logoHeight={426}
        bgImgSrc="/gallery/10.jpg"
        bgImgAlt="A shallow pool/spa with a large pool in the background"
        bgImgWidth={1024}
        bgImgHeight={2164}
        objectPosition="50% 55%"
      />

      <Section
        header="Residential and Commercial Services"
        // Our expert team is equipped to handle every aspect of pool maintenance, cleaning, opening, and closing, ensuring your pool is pristine, healthy, and ready for enjoyment year-round.
        assurance="At Boise Pool Pros, we specialize in providing top-tier pool services tailored to both residential and commercial clients."
        logoAlt="CPO Logo"
        logoWidth={426}
        logoHeight={426}
        logoDisplay={"none"}
        bgImgSrc="/home/pool-1024.jpg"
        bgImgAlt="A shallow pool/spa with a large pool in the background"
        bgImgWidth={1024}
        bgImgHeight={2164}
        objectPosition="50% 20%"
        href="/services"
      />

      <Section
        header="Technical Services"
        addedClass={styles.contentLastElement}
        // At Boise Pool Pros, we understand that the backbone of any great pool experience is its technical integrity.
        assurance="Our specialized pool technical services are designed to address, maintain, and enhance the mechanical and structural aspects of your pool, ensuring it operates smoothly and efficiently."
        logoSrc="/globals/pentair.jpg"
        logoAlt="Pentair Service Professional Logo"
        logoWidth={512}
        logoHeight={512}
        bgImgSrc="/home/tech-1024.jpg"
        bgImgAlt="Several pool pumps and filters fit snugly in a small room."
        bgImgWidth={1024}
        bgImgHeight={1365}
        objectPosition="50% 90%"
        href="/services#technical-services"
      />

      <SwiperAutoFlow styles={styles} />
    </>
  );
}

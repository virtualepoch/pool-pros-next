"use client";
import { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./parallax.module.css";
// COMPONENTS
import { Landing } from "./parallax/landing";
import { Header } from "./parallax/header";
import { Page1 } from "./parallax/page-1";
import { BtnToTop } from "./parallax/btn-to-top";
import { HeaderStickyNav } from "./parallax/header-sticky-nav";
import { Background } from "./parallax/background";

export const ParallaxSection = ({ images }) => {
  const ref = useRef();

  return (
    <main className={`main ${styles.container}`}>
      <Parallax ref={ref} pages={5} className={styles.parallax}>
        <Header styles={styles} />

        <ParallaxLayer
          sticky={{ start: 0.3, end: 4 }}
          className={styles.sticky}
        >
          <HeaderStickyNav styles={styles} />
        </ParallaxLayer>

        <Landing styles={styles} />

        <Page1 styles={styles} />
        <Page1 styles={styles} offset={2} src="/gallery/0.jpeg" />
      </Parallax>

      <BtnToTop parallaxRef={ref} styles={styles} />

      <Background styles={styles} images={images} />
    </main>
  );
};

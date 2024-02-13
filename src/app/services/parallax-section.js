"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import styles from "./parallax-section.module.css";
import { InViewOpacity } from "../components/in-view-opacity";

export const ParallaxSection = () => {
  const parallaxSection = useRef();

  return (
    <div className={styles.parallaxSectionContainer}>
      <Parallax
        ref={parallaxSection}
        pages={4}
        className={styles.parallaxSection}
      >
        <ParallaxLayer
          factor={4}
          offset={0}
          speed={0}
          className={styles.parallaxBgLayer}
        >
          <Image
            priority
            className={styles.parallaxBgImg}
            src="/home/pool-1024.jpg"
            alt="?"
            width={1024}
            height={2164}
          />
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={0}
          speed={0}
          // horizontal
          className={styles.parallaxLayer1}
        >
          <h1 className={`route-header ${styles.parallaxHeader}`}>Services</h1>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          factor={1}
          offset={1}
          speed={0}
          className={styles.parallaxLayer2Overlay}
        >
          <h1 className={`route-header ${styles.parallaxHeader}`}>
            Pool & Spa Cleaning
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          speed={1}
          className={styles.parallaxLayer2Bg}
        >
          <InViewOpacity rootMargin="-20%" triggerOnce={false} opacitySpeed="400ms">
            <Image
              className={styles.parallaxLayer2BgImg}
              src="/gallery/3.jpeg"
              alt="Pool & spa cleaning section background"
              width={640}
              height={480}
            />
          </InViewOpacity>
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={2}
          speed={1}
          className={styles.parallaxLayer2Bg}
        >
          <InViewOpacity rootMargin="-20%" triggerOnce={false} opacitySpeed="400ms">
            <Image
              className={styles.parallaxLayer2BgImg}
              src="/gallery/2.jpeg"
              alt="Pool & spa cleaning section background"
              width={640}
              height={480}
            />
          </InViewOpacity>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          className={styles.parallaxLayer5}
        ></ParallaxLayer>
      </Parallax>

      <button
        onClick={() => {
          parallaxSection.current.scrollTo(0);
        }}
        className={styles.btnToTop}
      >
        Scroll to top
      </button>
    </div>
  );
};

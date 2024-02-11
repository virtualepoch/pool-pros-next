"use client";
import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./parallax-section.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const ParallaxSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.99,
    triggerOnce: true,
  });

  console.log(inView);

  return (
    <div ref={ref} className={styles.parallaxSectionContainer}>
      <Parallax pages={3} enabled={inView} className={styles.parallaxSection}>
        <ParallaxLayer
          factor={3}
          offset={0}
          speed={0}
          className={styles.parallaxLayer1}
        >
          <Image
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
          className={styles.parallaxLayer2}
        >
          <h1 className="route-header">Services</h1>
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          speed={-1}
          horizontal
          className={styles.parallaxLayer3}
        >
          <Image
            className={styles.parallaxLogo}
            src="/globals/cpo.jpg"
            alt="?"
            width={426}
            height={426}
          />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          className={styles.parallaxLayer4}
        />

        <ParallaxLayer offset={2} speed={1} className={styles.parallaxLayer5}>
          <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

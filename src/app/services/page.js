"use client";
import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./parallax.module.css";
// COMPONENTS
import { Background } from "./parallax/background";
import { Header } from "./parallax/header";
import { CSSTransition } from "react-transition-group";
import { Page1 } from "./parallax/page-1";
import { ParticleSphere } from "../components/particle-sphere";

export const viewport = {
  themeColor: "#f00",
};

export default function Services() {
  const ref = useRef(null);
  const [state, setState] = useState();

  useEffect(() => {
    setState(ref.current.offset > 0.2 ? true : false);
    console.log(ref.current.offset);
  }, [setState]);

  return (
    <main className={`main ${styles.container}`}>
      {/* <ParticleSphere /> */}
      <Parallax ref={ref} pages={5} className={styles.parallax}>
        <Background styles={styles} />

        <Header styles={styles} />

        <ParallaxLayer
          sticky={{ start: 0.5, end: 4 }}
          className={`${styles.sticky}`}
        >
          <h1 className={`route-header ${styles.stickyHeader}`}>
            Pool & Spa Cleaning
          </h1>
        </ParallaxLayer>

        <Page1 styles={styles} />
        <Page1 styles={styles} offset={2} src="/gallery/0.jpeg" />
      </Parallax>

      <CSSTransition
        in={true}
        unmountOnExit
        timeout={300}
        classNames="services-btn-top"
      >
        <div className={`services-btn-top ${styles.btnTopContainer}`}>
          <button
            onClick={() => {
              ref.current.scrollTo(0);
            }}
            className={`btn-to-top ${styles.servicesBtnTop}`}
          >
            Scroll to top
          </button>
        </div>
      </CSSTransition>
    </main>
  );
}

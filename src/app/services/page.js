"use client";
import { ZoomBg } from "../components/global/zoom-bg";
import { Landing } from "./components/landing";
import { BtnAndNav } from "./components/btn-and-nav";
import { Sections } from "./components/sections";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

// export const metadata = {
//   title: "Services - Boise Pool Pros",
//   openGraph: {
//     title: "Boise Pool Pros",
//     description: "Boise's Highly Rated Pool & Spa Service Professionals",
//     url: "/",
//     siteName: "Boise Pool Pros",
//     images: {
//       url: "/og_services_2.jpg",
//       width: 1200,
//       height: 630,
//     },
//     locale: "en_US",
//     type: "website",
//   },
// };

const IMAGES = [
  { url: "/gallery/0.jpg", alt: "image one", width: 1440, height: 1080 },
  { url: "/gallery/spa-0.jpg", alt: "image one", width: 2048, height: 1536 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
];

export default function Services() {
  const [state, setState] = useState();
  const header = useRef();
  // header.current.getBoundingClientRect().width}

  useEffect(() => {
    function handleScroll() {
      setState(window.scrollY > window.innerHeight ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setState]);

  return (
    <>
      <ZoomBg images={IMAGES} />

      <Landing styles={styles} />

      <div className={styles.routeHeader}>
        <div className={styles.btnAndNavWrap}>
          <BtnAndNav styles={styles} />
        </div>
        <div className={styles.headerTextWrap}>
          <p
            ref={header}
            className={styles.headerText}
            style={{
              left: state ? "60px" : 0,
              right: state ? "auto" : 0,
              transition: "500ms ease",
            }}
          >
            Services
          </p>
        </div>
      </div>

      <Sections />
    </>
  );
}

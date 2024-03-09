"use client";
import { useEffect } from "react";
import { initializeGoogleTagManager } from "../components/googleTagManager";
import { ZoomBg } from "../components/global/zoom-bg";
import { Landing } from "./components/landing";
import { Sections } from "./components/sections";
import styles from "./page.module.css";

const IMAGES = [
  { url: "/gallery/0.jpg", alt: "image one", width: 1440, height: 1080 },
  { url: "/gallery/spa-0.jpg", alt: "image one", width: 2048, height: 1536 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
];

export default function Services() {
  useEffect(() => {
    initializeGoogleTagManager("G-8BZ8QJ3NEW");
  }, []);

  return (
    <>
      <ZoomBg images={IMAGES} />

      <Landing styles={styles} />

      <div className={styles.routeHeader}>
        <p>Services</p>
      </div>

      <Sections />
    </>
  );
}

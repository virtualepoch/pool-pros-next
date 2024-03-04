import { ZoomBg } from "../components/global/zoom-bg";
import { Landing } from "./components/landing";
import { BtnAndNav } from "./components/btn-and-nav";
import { Sections } from "./components/sections";
import styles from "./page.module.css";

export const metadata = {
  title: "Services - Boise Pool Pros",
  openGraph: {
    title: "Boise Pool Pros",
    description: "Boise's Highly Rated Pool & Spa Service Professionals",
    url: "/",
    siteName: "Boise Pool Pros",
    images: {
      url: "/og_services_2.jpg",
      width: 1200,
      height: 630,
    },
    locale: "en_US",
    type: "website",
  },
};

const IMAGES = [
  { url: "/gallery/0.jpg", alt: "image one", width: 1440, height: 1080 },
  { url: "/gallery/spa-0.jpg", alt: "image one", width: 2048, height: 1536 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
];

export default function Services() {
  return (
    <>
      <ZoomBg images={IMAGES} />

      <Landing styles={styles} />

      <div className={styles.routeHeader}>
        <div className={styles.btnAndNavWrap}>
          <BtnAndNav styles={styles} />
        </div>
        <p className={styles.headerText}>What We Do</p>
      </div>

      <Sections />
    </>
  );
}

import { BtnAndNav } from "./components/btn-and-nav";
import { Landing } from "./components/landing";
import { ZoomBg } from "../components/zoom-bg";
import { Section1 } from "./components/section-1";
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
  { url: "/gallery/0.jpeg", alt: "image one", width: 1024, height: 2164 },
  { url: "/gallery/7.png", alt: "image one", width: 1024, height: 2164 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
];

export default function Services() {
  return (
    <>
      <ZoomBg images={IMAGES} />

      <Landing styles={styles} />

      <div className={styles.routeHeader}>
        <BtnAndNav styles={styles} />
        <p>What We Do</p>
      </div>

      <Section1 styles={styles} />
    </>
  );
}

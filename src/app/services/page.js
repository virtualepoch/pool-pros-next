import { ZoomBg } from "../components/zoom-bg";
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

const SERVICES = [
  {
    id: "pool-openings",
    header: "Pool Openings",
    image: "/gallery/2.jpeg",
    content: "Pool Openings... What we do",
    beforeImage: "/services/before1-480.jpg",
    afterImage: "/services/after1-480.jpg",
  },
  {
    id: "pool-cleaning",
    header: "Pool Cleaning",
    image: "/gallery/3.jpeg",
    content:
      "Pool Cleaning... What we do... -The Boise Pool Pros are certified, insured, and experienced pool and spa openers. When it comes to pool openings we are not only certified and insured, but also very experienced.",
  },
  {
    id: "spa-cleaning",
    header: "Spa Cleaning",
    image: "/gallery/7.png",
    imagePosition: "0% 100%",
    content:
      "Spa Cleaning... What we do... -The Boise Pool Pros are certified, insured, and experienced pool and spa openers. When it comes to pool openings we are not only certified and insured, but also very experienced.",
    imagePosition: "30% 50%",
  },
  {
    id: "pool-maintenance",
    header: "Pool Maintenance",
    image: "/gallery/0.jpg",
    imagePosition: "0 50%",
    content: "Pool Maintenance... What we do",
  },
  {
    id: "spa-maintenance",
    header: "Spa Maintenance",
    image: "/gallery/7.png",
    content: "Spa Maintenance... What we do",
  },
  {
    id: "technical-services",
    header: "Technical Services",
    image: "/home/tech-1024.jpg",
    content: "Technical Services... What we do",
  },
  {
    id: "pool-closings",
    header: "Pool Closings",
    image: "/gallery/2.jpeg",
    content: "Pool Closings... What we do",
  },
];

export default function Services() {

  return (
    <>
      <ZoomBg images={IMAGES} />

      <Landing styles={styles} />

      <div className={styles.routeHeader}>
        <BtnAndNav styles={styles} />
        <p className={styles.headerText}>What We Do</p>
      </div>

      <Sections services={SERVICES} styles={styles} />
    </>
  );
}

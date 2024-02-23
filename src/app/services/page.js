import { BtnAndNav } from "./components/btn-and-nav";
import { Landing } from "./components/landing";
import { LandingBg } from "./components/landing-bg";
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

export default function Services() {
  return (
    <>
      <LandingBg styles={styles} />
      <div className={styles.routeHeader}>
        <BtnAndNav styles={styles} />
        Services
      </div>
      <main className="main">
        <Landing styles={styles} />

        <Section1 styles={styles} />
      </main>
    </>
  );
}

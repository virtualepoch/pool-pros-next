import Link from "next/link";
import { ElfsightWidgetComponent } from "./elfsight-widget";
import { LoadingPanel } from "./loading-panel";
import styles from "./page.module.css";

export const metadata = {
  title: "Customer Testimonials",
  description:
    "Read customer testimonials and feedback for Boise Pool Pros pool and spa service in the Boise Metro Area.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Testimonials - Boise Pool Pros",
    description:
      "See what customers say about Boise Pool Pros cleaning, maintenance, and technical service quality.",
    url: "/testimonials",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Testimonials() {
  return (
    <main className="main">
      <h1 className="route-header">Testimonials</h1>

      <p style={{ padding: "24px", maxWidth: "500px", margin: "auto" }}>
        Please Note: We have recently re-branded. Our previous company name was{" "}
        <span style={{ textDecoration: "underline" }}>
          IdaHomeServ Pool & Spa
        </span>
        . We will be updating with new reviews as they come in. Thanks!
      </p>

      <nav
        aria-label="Related site pages"
        style={{
          padding: "0 24px 16px",
          maxWidth: "560px",
          margin: "0 auto",
          fontSize: "17px",
          lineHeight: 1.55,
          color: "var(--text)",
        }}
      >
        <p style={{ margin: "0 0 8px" }}>While you are here:</p>
        <ul style={{ paddingLeft: "1.25rem", margin: 0, listStyleType: "disc" }}>
          <li style={{ marginBottom: "6px", listStyleType: "disc" }}>
            <Link href="/services">Services overview and pricing context</Link>
          </li>
          <li style={{ marginBottom: "6px", listStyleType: "disc" }}>
            <Link href="/services#faq">Answers to common service questions</Link>
          </li>
          <li style={{ marginBottom: "6px", listStyleType: "disc" }}>
            <Link href="/gallery">Photo gallery of recent pool work</Link>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Link href="/">Boise Pool Pros home page</Link>
          </li>
        </ul>
      </nav>

      <LoadingPanel styles={styles} />

      <ElfsightWidgetComponent styles={styles} />
    </main>
  );
}

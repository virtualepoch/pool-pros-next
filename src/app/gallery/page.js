import Link from "next/link";
import { BtnAndModalContact } from "../components/ui/btn-and-modal-contact";
import { ImageSlider } from "./image-slider";
import styles from "./gallery.module.css";

const galleryLinkStyle = {
  fontWeight: 700,
  color: "#3168ff",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

const IMAGES = [
  {
    url: "/images/1.jpeg",
    alt: "Boise Pool Pros gallery image one",
  },
  {
    url: "/images/0.jpg",
    alt: "Boise Pool Pros gallery image two",
  },
  {
    url: "/images/2.jpg",
    alt: "Boise Pool Pros gallery image three",
  },
  {
    url: "/images/3.jpeg",
    alt: "Boise Pool Pros gallery image four",
  },
  {
    url: "/images/10.jpg",
    alt: "Boise Pool Pros gallery image",
  },
  {
    url: "/images/open.jpg",
    alt: "Boise Pool Pros gallery image",
  },
  {
    url: "/images/4.jpeg",
    alt: "Boise Pool Pros gallery image five",
  },
  {
    url: "/images/5.jpeg",
    alt: "Boise Pool Pros gallery image six",
  },
  {
    url: "/images/6.jpeg",
    alt: "Boise Pool Pros gallery image seven",
  },
  {
    url: "/images/7.png",
    alt: "Boise Pool Pros gallery image seven",
  },
  {
    url: "/images/7.jpg",
    alt: "Boise Pool Pros gallery image seven",
  },
  {
    url: "/images/8.jpg",
    alt: "Boise Pool Pros gallery image eight",
  },
  {
    url: "/images/2.jpeg",
    alt: "Boise Pool Pros gallery image nine",
  },
  {
    url: "/images/11.jpg",
    alt: "Boise Pool Pros gallery image",
  },
  {
    url: "/images/12.jpg",
    alt: "Boise Pool Pros gallery image",
  },
  {
    url: "/images/open2.jpg",
    alt: "Boise Pool Pros gallery image",
  },
  {
    url: "/images/spa-0.jpg",
    alt: "Boise Pool Pros gallery image",
  },
  {
    url: "/images/tech-1024.jpg",
    alt: "Boise Pool Pros gallery image",
  },
  {
    url: "/images/maintenance2.jpg",
    alt: "Boise Pool Pros gallery image",
  },
];

export const metadata = {
  title: "Pool Service Gallery",
  description:
    "View Boise Pool Pros gallery photos featuring pool cleaning, maintenance, technical work, and seasonal opening and closing results.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Pool Service Gallery - Boise Pool Pros",
    description:
      "See real project photos from Boise Pool Pros pool and spa service work.",
    url: "/gallery",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Gallery() {
  return (
    <main className="main">
      <h1 className="route-header">Gallery</h1>

      <ImageSlider images={IMAGES} />

      <p className={styles.blurb}>
        These shots reflect the kind of work we do every week:{" "}
        <Link
          className={styles.inlineLink}
          style={galleryLinkStyle}
          href="/services#pool-spa-cleaning"
        >
          pool and spa cleaning
        </Link>
        ,{" "}
        <Link
          className={styles.inlineLink}
          style={galleryLinkStyle}
          href="/services#pool-spa-maintenance"
        >
          ongoing maintenance
        </Link>
        ,{" "}
        <Link
          className={styles.inlineLink}
          style={galleryLinkStyle}
          href="/services#technical-services"
        >
          technical service
        </Link>
        ,{" "}
        <Link
          className={styles.inlineLink}
          style={galleryLinkStyle}
          href="/services#pool-openings"
        >
          seasonal openings
        </Link>
        , and{" "}
        <Link
          className={styles.inlineLink}
          style={galleryLinkStyle}
          href="/services#pool-closings"
        >
          winter closings
        </Link>
        . For scheduling and what to expect on a route, read the{" "}
        <Link
          className={styles.inlineLink}
          style={galleryLinkStyle}
          href="/services#faq"
        >
          services FAQ
        </Link>
        ; for customer feedback, see{" "}
        <Link
          className={styles.inlineLink}
          style={galleryLinkStyle}
          href="/testimonials"
        >
          testimonials
        </Link>
        . When you are ready, use Contact below.
      </p>

      <nav className={styles.quickNav} aria-label="Quick links from gallery">
        <p className={styles.quickNavTitle}>Quick links</p>
        <ul className={styles.quickList}>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/services"
            >
              All services
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/services#pool-spa-cleaning"
            >
              Pool &amp; spa cleaning
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/services#pool-spa-maintenance"
            >
              Maintenance
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/services#technical-services"
            >
              Technical services
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/services#pool-openings"
            >
              Pool openings
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/services#pool-closings"
            >
              Pool closings
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/services#faq"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/testimonials"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className={styles.inlineLink}
              style={galleryLinkStyle}
              href="/"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <BtnAndModalContact addedClass="contact-link-gallery-page" offset={250} />
    </main>
  );
}

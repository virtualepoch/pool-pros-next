import Link from "next/link";
import { BtnAndModalContact } from "../components/ui/btn-and-modal-contact";
import { ImageSlider } from "./image-slider";

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

      <p
        style={{
          padding: "28px 24px 12px",
          maxWidth: "560px",
          margin: "0 auto",
          fontSize: "17px",
          lineHeight: 1.55,
          color: "var(--text)",
        }}
      >
        If a photo looks like your backyard—same plaster tone, similar equipment
        pad, or that familiar Boise wind grit in the corners—jump to the{" "}
        <Link href="/services">services breakdown</Link>, skim the{" "}
        <Link href="/services#faq">FAQ</Link> for how we schedule and bill, then
        read <Link href="/testimonials">Google-backed testimonials</Link> before
        you tap Contact.
      </p>

      <BtnAndModalContact addedClass="contact-link-gallery-page" offset={250} />
    </main>
  );
}

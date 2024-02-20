import { LinkContact } from "../components/links/link-contact";
import { ImageSlider } from "./image-slider";

export const viewport = {
  themeColor: "#0ff",
};

const IMAGES = [
  {
    url: "/gallery/1.jpeg",
    alt: "Image one",
  },
  {
    url: "/gallery/0.jpeg",
    alt: "Image two",
  },
  {
    url: "/gallery/2.jpeg",
    alt: "Image three",
  },
  {
    url: "/gallery/3.jpeg",
    alt: "Image four",
  },
  {
    url: "/gallery/4.jpeg",
    alt: "Image five",
  },
  {
    url: "/gallery/5.jpeg",
    alt: "Image six",
  },
  {
    url: "/gallery/6.jpeg",
    alt: "Image seven",
  },
  {
    url: "/gallery/7.png",
    alt: "Image seven",
  },
  {
    url: "/gallery/8.jpg",
    alt: "Image seven",
  },
];

export default function Gallery() {
  return (
    <main className="main">
      <h1 className="route-header">Gallery</h1>

      <ImageSlider images={IMAGES} />

      <LinkContact addedClass="contact-link-gallery-page" />
    </main>
  );
}

import { BtnAndModalContact } from "../components/ui/btn-and-modal-contact";
import { ImageSlider } from "./image-slider";

const IMAGES = [
  {
    url: "/gallery/1.jpeg",
    alt: "Image one",
  },
  {
    url: "/gallery/0.jpg",
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

export const metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <main className="main">
      <h1 className="route-header">Gallery</h1>

      <ImageSlider images={IMAGES} />

      <BtnAndModalContact addedClass="contact-link-gallery-page" />
    </main>
  );
}

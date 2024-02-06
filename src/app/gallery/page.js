import { LinkContact } from "../components/links/link-contact";
import { ImageSlider } from "./image-slider";
import styles from "./page.module.css";

const IMAGES = [
  {
    url: "/poolpics/0.jpeg",
    alt: "Image one",
  },
  {
    url: "/poolpics/1.jpeg",
    alt: "Image two",
  },
  {
    url: "/poolpics/2.jpeg",
    alt: "Image three",
  },
  {
    url: "/poolpics/3.jpeg",
    alt: "Image four",
  },
  {
    url: "/poolpics/4.jpeg",
    alt: "Image five",
  },
  {
    url: "/poolpics/5.jpeg",
    alt: "Image six",
  },
  {
    url: "/poolpics/6.jpeg",
    alt: "Image seven",
  },
  {
    url: "/poolpics/7.png",
    alt: "Image seven",
  },
  {
    url: "/poolpics/8.jpg",
    alt: "Image seven",
  },
];

export default function Gallery() {
  return (
    <main className="main">
      <h3 className="route-header">Gallery</h3>

      <ImageSlider styles={styles} images={IMAGES} />

      <LinkContact addedClass="contact-link-gallery-page"/>
    </main>
  );
}

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
  title: "Boise Pool Pros - Gallery",
};

export default function Gallery() {
  return (
    <main className="main">
      <h1 className="route-header">Gallery</h1>

      <ImageSlider images={IMAGES} />

      <BtnAndModalContact addedClass="contact-link-gallery-page" offset={250} />
    </main>
  );
}

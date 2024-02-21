import { ParallaxSection } from "./parallax-section";

export const metadata = {
  title: "Services - Boise Pool Pros",
  openGraph: {
    title: "Boise Pool Pros",
    description: "Boise's Highly Rated Pool & Spa Professionals",
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
  { url: "/home/pool-1024.jpg", alt: "image one", width: 1024, height: 2164 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
  { url: "/gallery/3.jpeg", alt: "image one", width: 1024, height: 2164 },
];

export default function Services() {
  return <ParallaxSection images={IMAGES} />;
}

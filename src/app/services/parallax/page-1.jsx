import { InViewOpacity } from "@/app/components/in-view-opacity";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

export const Page1 = ({ styles, offset = 1, src = "/gallery/3.jpeg" }) => {
  return (
    <ParallaxLayer
      factor={1}
      offset={offset}
      speed={0.5}
      className={styles.parallaxLayer}
    >
      <InViewOpacity rootMargin="-10%" triggerOnce={false} opacitySpeed="400ms">
        <div className={styles.card}>
          <p className={styles.cardText}>
            Our service technicians are highly trained and pay close attention
            to details.
          </p>
          <Image
            priority
            className={styles.cardImg}
            src={src}
            alt="?"
            width={640}
            height={480}
          />
        </div>
      </InViewOpacity>
    </ParallaxLayer>
  );
};

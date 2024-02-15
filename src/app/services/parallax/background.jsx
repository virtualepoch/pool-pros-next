import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

export const Background = ({ styles }) => {
  return (
    <ParallaxLayer
      factor={5}
      offset={0}
      speed={0}
      className={styles.background}
    >
      <Image
        priority
        className={styles.backgroundImg}
        src="/home/pool-1024.jpg"
        alt="?"
        width={1024}
        height={2164}
      />
    </ParallaxLayer>
  );
};

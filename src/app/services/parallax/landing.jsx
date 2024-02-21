import { ParallaxLayer } from "@react-spring/parallax";

export const Landing = ({ styles }) => {
  return (
    <ParallaxLayer factor={1} offset={0} speed={0} className={styles.landing}>
      <h2 className={styles.heroStatement}>
        The Boise Pool Pros are <span>certified</span>, <span>insured</span>,
        and <span>experienced</span> pool and spa professionals.
      </h2>
    </ParallaxLayer>
  );
};

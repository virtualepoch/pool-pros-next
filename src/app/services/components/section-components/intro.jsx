import styles from "./components.module.css";

export const Intro = ({ services }) => {
  return (
    <div
      className={styles.intro}
      style={{
        backgroundImage: `radial-gradient(ellipse at center, #0007 50%, #0002), url(${services.introImage})`,
        backgroundPosition: services.introImagePosition,
      }}
    >
      {services.intro}
    </div>
  );
};

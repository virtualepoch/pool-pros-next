import styles from "./intro.module.css";

export const IntroBeforeAfter = ({ services }) => {
  return (
    <div className={styles.intro}>
      <div
        className={styles.introUnderlay}
        style={{
          backgroundImage: `radial-gradient(ellipse at center, #0007 50%, #0002), url(${services.introImage})`,
          backgroundPosition: services.introImagePosition,
        }}
      />

      <div
        className={styles.introOverlay}
        style={{
          backgroundImage: `radial-gradient(ellipse at center, #0007 50%, #0002), url(${services.introImageAfter})`,
          backgroundPosition: services.introImageAfterPosition,
        }}
      />

      <p className={styles.introText}>
        {services.intro}
        <br />
        <br />
        {services.intro2}
      </p>
    </div>
  );
};

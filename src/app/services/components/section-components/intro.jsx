export const Intro = ({ styles, services }) => {
  return (
    <div
      className={styles.intro}
      style={{
        backgroundImage: `url(${services.introImage})`,
        backgroundPosition: services.introImagePosition,
      }}
    >
      {services.intro}
    </div>
  );
};

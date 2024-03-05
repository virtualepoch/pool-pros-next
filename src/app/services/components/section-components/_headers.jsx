export const Headers = ({ styles, services }) => {
  return (
    <>
      <h3
        className={styles.header}
        style={{
          backgroundImage: `url(${services.headerImage})`,
          backgroundPosition: services.headerImagePosition,
        }}
      >
        {services.header}
      </h3>

      <h3 className={styles.subHeader}>{services.subHeader}</h3>
    </>
  );
};

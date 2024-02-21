export const HeaderStickyNav = ({ styles }) => {
  return (
    <>
      <h1 className={`route-header ${styles.stickyHeader}`}>
        <span>
          <button className={styles.btnNav} />
        </span>
        Services
      </h1>
    </>
  );
};

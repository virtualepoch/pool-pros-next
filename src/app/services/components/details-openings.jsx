export const DetailsOpenings = ({ styles }) => {
  return (
    <div className={styles.details}>
      <p className={styles.detailsListSubHeader}>
        Our pool opening service includes a thorough checklist to ensure every
        detail is addressed:
      </p>

      <ul className={styles.detailsList}>
        <li className={styles.detailsListItem}>
          <div className={styles.checkbox} />
          Removing the winter cover and storing it properly
        </li>
        <li className={styles.detailsListItem}>
          <div className={styles.checkbox} />
          Removing winter plugs and priming system
        </li>
        <li className={styles.detailsListItem}>
          <div className={styles.checkbox} />
          Reinstalling pumps, filters, heaters, and other pool equipment
        </li>
        <li className={styles.detailsListItem}>
          <div className={styles.checkbox} />
          Skimming the surface, vacuuming the bottom, and brushing the walls
        </li>
        <li className={styles.detailsListItem}>
          <div className={styles.checkbox} />
          Balancing the water chemistry for a sparkling clean pool
        </li>
        <li className={styles.detailsListItem}>
          <div className={styles.checkbox} />
          Starting up the pool equipment and ensuring everything is running
          smoothly
        </li>
        <li className={styles.detailsListItem}>
          <div className={styles.checkbox} />
          Performing a detailed safety inspection of the pool area and equipment
        </li>
      </ul>
    </div>
  );
};

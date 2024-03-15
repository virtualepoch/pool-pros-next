export const DetailsMaintenance = ({ styles }) => {
  return (
    <div className={styles.details}>
      <ul className={styles.detailsList} style={{ textAlign: "center" }}>
        <li
          className={`${styles.cleaningDetailsListItem} ${styles.maintenanceListItem}`}
        >
          Chemical Balancing and Treatment
        </li>

        <li
          className={`${styles.cleaningDetailsListItem} ${styles.maintenanceListItem}`}
        >
          Pool Equipment Inspection and Repair
        </li>

        <li
          className={`${styles.cleaningDetailsListItem} ${styles.maintenanceListItem}`}
        >
          Pool Opening and Closing Services
        </li>

        <li
          className={`${styles.cleaningDetailsListItem} ${styles.maintenanceListItem}`}
        >
          Filter Cleaning and Replacement
        </li>

        <li
          className={`${styles.cleaningDetailsListItem} ${styles.maintenanceListItem}`}
        >
          Salt cell cleaning and inspection
        </li>

        <li
          className={`${styles.cleaningDetailsListItem} ${styles.maintenanceListItem}`}
        >
          Tailored maintenance schedules to fit specific pool needs and usage
          patterns
        </li>
      </ul>
    </div>
  );
};

export const DetailsMaintenance = ({ styles }) => {
  return (
    <div className={styles.details}>
      <ul className={styles.detailsList} style={{ textAlign: "center" }}>
        <li
          className={styles.cleaningDetailsListItem}
          style={{ fontWeight: "bold" }}
        >
          Chemical Balancing and Treatment
        </li>

        <hr className={styles.hr} />

        <li
          className={styles.cleaningDetailsListItem}
          style={{ fontWeight: "bold" }}
        >
          Pool Equipment Inspection and Repair
        </li>

        <hr className={styles.hr} />

        <li
          className={styles.cleaningDetailsListItem}
          style={{ fontWeight: "bold" }}
        >
          Pool Opening and Closing Services
        </li>
        
        <hr className={styles.hr} />

        <li
          className={styles.cleaningDetailsListItem}
          style={{ fontWeight: "bold" }}
        >
          Filter Cleaning and Replacement
        </li>

        <hr className={styles.hr} />
        
        <li
          className={styles.cleaningDetailsListItem}
          style={{ fontWeight: "bold" }}
        >
          Salt cell cleaning and inspection
        </li>
        
        <hr className={styles.hr} />

        <li
          className={styles.cleaningDetailsListItem}
          style={{ fontWeight: "bold" }}
        >
          Tailored maintenance schedules to fit specific pool needs and usage
          patterns
        </li>
      </ul>
    </div>
  );
};

export const DetailsCleaning = ({ styles }) => {
  return (
    <div className={styles.details}>
      <ul className={styles.detailsList}>
        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: "bold" }}>Regular Maintenance:&nbsp;</span>
          Weekly, bi-weekly, or monthly visits to suit your schedule and pool
          usage.
        </li>

        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: "bold" }}>Water Balancing:&nbsp;</span>
          Ensuring your pool water is perfectly balanced for safety and comfort,
          including pH, chlorine, and alkalinity levels.
        </li>

        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: "bold" }}>
            Cleaning and Filtration:&nbsp;
          </span>
          Skimming the surface, vacuuming the bottom, brushing the walls, and
          cleaning the filter system to ensure efficient operation and clear
          water.
        </li>

        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: "bold" }}>Equipment Check:&nbsp;</span>
          Regular inspection of pumps, heaters, and other pool equipment to
          prevent malfunctions and costly repairs.
        </li>

        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: "bold" }}>Algae Prevention:&nbsp;</span>
          Treatment and prevention strategies to keep algae at bay and your pool
          water clear.
        </li>

        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: "bold" }}>
            Customized Cleaning Plans:&nbsp;
          </span>
          Tailored cleaning schedules and services that fit your specific pool
          or spa type, size, and usage needs.
        </li>
      </ul>
    </div>
  );
};

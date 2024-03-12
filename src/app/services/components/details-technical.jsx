export const DetailsTechnical = ({ styles }) => {
  return (
    <div className={styles.details}>
      <ul className={styles.detailsList}>
        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: 700 }}>
            Equipment Installation and Repair:&nbsp;
          </span>
          From pumps and heaters to filtration systems, our technicians ensure
          your equipment is installed correctly and functioning at its best.
        </li>

        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: 700 }}>System Upgrades:&nbsp;</span>
          We recommend and implement upgrades to your pool’s systems, enhancing
          efficiency, safety, and user experience.
        </li>

        <li className={styles.cleaningDetailsListItem}>
          <span style={{ fontWeight: 700 }}>Automation:&nbsp;</span>
          We integrate the latest in pool automation technology, allowing you to
          control lighting, heating, and cleaning systems with the touch of a
          button.
        </li>
      </ul>
    </div>
  );
};

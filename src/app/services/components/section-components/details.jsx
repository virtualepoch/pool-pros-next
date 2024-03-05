import Image from "next/image";
import { POOL_OPENING_LIST } from "../../content/pool-opening-list";
import { CLEANING_LIST } from "../../content/cleaning-list";
import { MAINTENANCE_LIST } from "../../content/maintenance-list";
import { TECHNICAL_SERVICES_LIST } from "../../content/technical-services-list";

export const Details = ({ styles, services }) => {
  return (
    <div className={styles.details}>
      <p className={styles.detailsListSubHeader}>
        {services.detailsListSubHeader}
      </p>

      <ul className={styles.detailsList}>
        {services.id === "pool-openings" &&
          POOL_OPENING_LIST.map((item) => (
            <li className={styles.detailsListItem} key={item}>
              <div className={styles.checkbox} />
              {item}
            </li>
          ))}

        {services.id === "pool-spa-cleaning" &&
          CLEANING_LIST.map((item) => (
            <li className={styles.cleaningDetailsListItem} key={item.id}>
              <span style={{ fontWeight: "700" }}>{item.id}</span>
              {item.text}
            </li>
          ))}

        {services.id === "pool-spa-maintenance" &&
          MAINTENANCE_LIST.map((item) => (
            <li
              className={styles.cleaningDetailsListItem}
              key={item.id}
              style={{ textAlign: "center" }}
            >
              <span style={{ fontWeight: "700" }}>{item.text}</span>
            </li>
          ))}

        {services.id === "technical-services" &&
          TECHNICAL_SERVICES_LIST.map((item) => (
            <li className={styles.cleaningDetailsListItem} key={item.id}>
              <span style={{ fontWeight: "700" }}>{item.id}</span>
              {item.text}
            </li>
          ))}
      </ul>
    </div>
  );
};

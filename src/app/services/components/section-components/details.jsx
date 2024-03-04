import Image from "next/image";
import { POOL_OPENING_LIST } from "../../content/pool-opening-list";
import { POOL_CLEANING_LIST } from "../../content/pool-cleaning-list";
import { TECHNICAL_SERVICES_LIST } from "../../content/technical-services-list";

export const Details = ({ styles, services }) => {
  return (
    <div className={styles.details}>
      <h3 className={styles.detailsHeader}>{services.detailsHeader}</h3>

      <div className={styles.detailsContentWrap}>
        <Image className={styles.detailsImage} src={services.detailsImage} alt="Services section details image" width={640} height={480} style={{ objectPosition: services.detailsImagePosition, maxHeight: services.id === "technical-services" ? "300px" : "" }} />

        <div className={styles.detailsListWrap}>
          <p className={styles.sectionContent}>{services.detailsListSubHeader}</p>

          <ul className={styles.detailsList}>
            {services.id === "pool-openings" &&
              POOL_OPENING_LIST.map((item) => (
                <li className={styles.detailsListItem} key={item}>
                  <div className={styles.checkbox} />
                  {item}
                </li>
              ))}

            {services.id === "pool-cleaning" &&
              POOL_CLEANING_LIST.map((item) => (
                <li className={styles.cleaningDetailsListItem} key={item.id}>
                  <span style={{ fontWeight: "700" }}>{item.id}</span>
                  {item.text}
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
      </div>
    </div>
  );
};

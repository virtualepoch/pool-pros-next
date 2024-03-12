import Image from "next/image";

import { Headers } from "./section-components/_headers";
import { Intro } from "./section-components/intro";
import { IntroBeforeAfter } from "./section-components/intro-before-after";
import { Details } from "./section-components/details";

// CONTENT //////////////////////////////////////////
import { SERVICES } from "../content/_main-content";
import { BtnAndNav } from "./btn-and-nav";

export const Sections = ({ styles }) => {
  return (
    <div className={styles.sections}>
    

      <BtnAndNav styles={styles} services={SERVICES} />

      {SERVICES.map((services) => (
        <section
          className={
            services.id === "technical-services"
              ? `${styles.section} ${styles.technicalServices}`
              : `${styles.section}`
          }
          key={services.id}
          id={services.id}
        >
          <Headers styles={styles} services={services} />

          <div className={styles.sectionContentWrap}>
            {services.id === "pool-spa-maintenance" ? (
              <IntroBeforeAfter services={services} />
            ) : (
              <Intro services={services} />
            )}

            {services.id !== "pool-closings" && (
              <Details styles={styles} services={services} />
            )}
          </div>
        </section>
      ))}

    
   
    </div>
  );
};

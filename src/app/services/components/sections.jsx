import Image from "next/image";
import { BgGradientAnim } from "./bg-gradient-anim/bg-gradient-anim";
import { SiteLogoFloatAnim } from "./site-logo-float-anim";
import { Headers } from "./section-components/_headers";
import { Intro } from "./section-components/intro";
import { IntroBeforeAfter } from "./section-components/intro-before-after";
import { Details } from "./section-components/details";
import { Guarantee } from "./section-components/guarantee";
import { WhyChoose } from "./section-components/why-choose";

import styles from "./sections.module.css";

// CONTENT //////////////////////////////////////////
import { SERVICES } from "../content/services-content";
import { BtnAndNav } from "./btn-and-nav";
import { BtnAndModalContactGlobal } from "../../components/global/btn-and-modal-contact-global";

export const Sections = () => {
  return (
    <div className={styles.sections}>
      <BgGradientAnim />

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
              <IntroBeforeAfter styles={styles} services={services} />
            ) : (
              <Intro styles={styles} services={services} />
            )}

            <Details styles={styles} services={services} />
          </div>
        </section>
      ))}

      <div className={styles.sectionFooterWrap}>
        <WhyChoose styles={styles} />

        <Guarantee styles={styles} services={SERVICES} />
      </div>

      <SiteLogoFloatAnim styles={styles} />
    </div>
  );
};

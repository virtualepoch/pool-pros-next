import Image from "next/image";
import { BgGradientAnim } from "./bg-gradient-anim/bg-gradient-anim";
import { SiteLogoFloatAnim } from "./site-logo-float-anim";
import { Headers } from "./section-components/_headers";
import { Intro } from "./section-components/intro";
import { Details } from "./section-components/details";
import { Guarantee } from "./section-components/guarantee";
import { WhyChoose } from "./section-components/why-choose";

import styles from "./sections.module.css";

// CONTENT //////////////////////////////////////////
import { SERVICES } from "../content/main-content";
import { BtnAndNav } from "./btn-and-nav";

export const Sections = () => {
  return (
    <div className={styles.sections}>
      <BgGradientAnim />

      <BtnAndNav styles={styles} />

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
            <Intro styles={styles} services={services} />

            <Details styles={styles} services={services} />

            {/* {services.id === "technical-services" && (
              <>
                <div className={styles.stickersContainer}>
                  <Image
                    className={styles.pentairStickers}
                    src="/services/certified-stickers-512.png"
                    alt="Services section image"
                    width={512}
                    height={539}
                  />
                  <p className={styles.stickersMessage}>
                    We are fully Certified!
                  </p>
                </div>
              </>
            )} */}
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

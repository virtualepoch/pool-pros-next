import Image from "next/image";
import { BgGradientAnim } from "./bg-gradient-anim/bg-gradient-anim";
import { SectionBeforeAfter } from "./section-components/section-before-after";
import { SiteLogoFloatAnim } from "./site-logo-float-anim";
import { Intro } from "./section-components/intro";
import { Guarantee } from "./section-components/guarantee";
import { Details } from "./section-components/details";
import { WhyChoose } from "./section-components/why-choose";

import styles from "./sections.module.css";

// CONTENT //////////////////////////////////////////
import { SERVICES } from "../content/main-content";

export const Sections = () => {
  return (
    <div className={styles.sections}>
      <BgGradientAnim />

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
          <header className={styles.headerWrap}>
            <h3 className={styles.header}>{services.header}</h3>

            {/* <img
              src="https://gifdb.com/images/high/blue-pool-water-reflection-ac7ghsk1xa52q7cn.webp"
              alt="hello"
              width={604}
              height={400}
              className={styles.headerImage}
              style={{ objectPosition: "center" }}
            /> */}
            <Image
              className={styles.headerImage}
              src={services.image}
              alt="Services section image"
              width={640}
              height={480}
              style={{ objectPosition: services.imagePosition }}
            />
          </header>

          <div className={styles.sectionContentWrap}>
            <Intro styles={styles} services={services} />

            <Guarantee styles={styles} services={services} />

            <Details styles={styles} services={services} />

            <WhyChoose styles={styles} />

            {services.id === "pool-openings" && (
              <SectionBeforeAfter styles={styles} services={services} />
            )}

            {services.id === "technical-services" && (
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
            )}
          </div>
        </section>
      ))}

      <SiteLogoFloatAnim styles={styles} />
    </div>
  );
};

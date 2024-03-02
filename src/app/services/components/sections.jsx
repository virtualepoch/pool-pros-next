import Image from "next/image";
import { BgGradientAnim } from "./bg-gradient-anim/bg-gradient-anim";
import { SectionBeforeAfter } from "./section-before-after";
import { SiteLogoFloatAnim } from "./site-logo-float-anim";

export const Sections = ({ services, styles }) => {
  return (
    <div className={styles.sections}>
      <BgGradientAnim />

      {services.map((services) => (
        <section
          className={
            services.id === "technical-services"
              ? `${styles.section} ${styles.technicalServices}`
              : `${styles.section}`
          }
          key={services.id}
          id={services.id}
        >
          <h3 className={styles.sectionHeader}>{services.header}</h3>

          <Image
            className={styles.sectionImage}
            src={services.image}
            alt="Services section image"
            width={640}
            height={480}
          />

          <p className={styles.sectionContent}>{services.content}</p>

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
        </section>
      ))}

      <SiteLogoFloatAnim styles={styles} />
    </div>
  );
};

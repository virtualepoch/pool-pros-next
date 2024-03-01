import Image from "next/image";
import { BgGradientAnim } from "./bg-gradient-anim/bg-gradient-anim";
import { SectionBeforeAfter } from "./section-before-after";

export const Sections = ({ services, styles }) => {
  return (
    <div className={styles.sections}>
      <BgGradientAnim />

      {services.map((services) => (
        <section className={styles.section} key={services.id} id={services.id}>
          {services.id === "technical-services" && (
            <div className={styles.inViewRef} />
          )}

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
            <div className={styles.stickersContainer}>
              <div className={styles.pentairStickers} />
              <p className={styles.stickersMessage}>We are fully Certified!</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

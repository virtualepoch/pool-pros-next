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
            <>
              <div className={styles.stickersContainer}>
                <div className={styles.pentairStickersDiv} />
                <p className={styles.stickersMessage}>
                  We are fully Certified! div 1024
                </p>
              </div>

              <div className={styles.stickersContainer}>
                <Image
                  className={styles.pentairStickers}
                  src="/services/certified-stickers-1024.png"
                  alt="Services section image"
                  width={1443}
                  height={1518}
                />
                <p className={styles.stickersMessage}>
                  We are fully Certified! next img 1024
                </p>
              </div>

              <div className={styles.stickersContainer}>
                <Image
                  className={styles.pentairStickers}
                  src="/services/certified-stickers-512.png"
                  alt="Services section image"
                  width={512}
                  height={539}
                />
                <p className={styles.stickersMessage}>
                  We are fully Certified! next img 512
                </p>
              </div>

              <div className={styles.stickersContainer}>
                <Image
                  className={styles.pentairStickers}
                  src="/services/certified-stickers-256.png"
                  alt="Services section image"
                  width={512}
                  height={539}
                />
                <p className={styles.stickersMessage}>
                  We are fully Certified! next img 256
                </p>
              </div>
            </>
          )}
        </section>
      ))}
    </div>
  );
};

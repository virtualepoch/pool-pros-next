import Image from "next/image";

export const Intro = ({ styles, services }) => {
  return (
    <div className={styles.intro}>
      <div className={styles.introContentWrap}>
        <div className={styles.quoteIconLeft} />

        <p className={styles.introContent}>{services.intro}</p>
        
        <div className={styles.quoteIconRight} />
      </div>

      <Image
        className={styles.introImage}
        src={services.introImage}
        alt="Services section intro image"
        width={640}
        height={480}
        style={{ objectPosition: services.introImagePosition }}
      />
    </div>
  );
};

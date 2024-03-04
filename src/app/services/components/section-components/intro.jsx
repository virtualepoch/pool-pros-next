import Image from "next/image";

export const Intro = ({ styles, services }) => {
  return (
    <div className={styles.introWrap}>
      <p className={styles.intro}>{services.intro}</p>

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

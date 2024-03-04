import Image from "next/image";

export const SectionBeforeAfter = ({ styles, services }) => {
  return (
    <div className={styles.beforeAfterContainer}>
      <p className={styles.beforeAfterText}>
        We turn pool around real quick like!!!!
      </p>

      <div className={styles.imagesWrap}>
        <Image
          className={styles.beforeImage}
          src={services.beforeImage}
          alt="Before services image"
          width={640}
          height={480}
        />

        <div className={styles.beforeText}>Before</div>

        <Image
          className={styles.afterImage}
          src={services.afterImage}
          alt="After services image"
          width={640}
          height={480}
        />

        <div className={styles.afterText}>After</div>
      </div>
    </div>
  );
};

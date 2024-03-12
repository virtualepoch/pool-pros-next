import Image from "next/image";

export const BeforeAfterNextImgs = ({ styles, services }) => {
  return (
    <div className={styles.beforeAfterContainer}>
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

import Image from "next/image";
import styles from "./skimmer.module.css";

export const SkimmerAppInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.flexWrap}>
          <h1 className={styles.heading}>
            We use the
            <br /> Skimmer App
          </h1>

          <Image
            className={styles.image}
            src="/images/skimmer-logo.webp"
            alt="Skimmer App logo"
            width={240}
            height={240}
          />
        </div>

        <p className={styles.textLarge}>
          The skimmer app allows us to record the services performed and
          chemicals added at each visit. After the service is finished Skimmer
          sends a detailed report to your email. This ensures you&apos;re always
          informed and updated on the current status of your pool or spa.
        </p>
      </div>
    </div>
  );
};

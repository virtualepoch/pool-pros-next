import Image from "next/image";
import styles from "./skimmer.module.css";

export const SkimmerAppInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.heading}>We use the Skimmer App</h1>
        <p className={styles.textLarge}>
          The Skimmer app provides you with automated weekly updates directly to
          your email. It ensures you stay fully informed about the health and
          current status of your pool.
        </p>

        <img
          className={styles.image}
          src={
            "https://play-lh.googleusercontent.com/mnOAREKT7OQDKGg_wQZUXnM__XMxWWFGj-XgMCtL8bi5PAba_PwBMG3Asf5Bo6fJWQ"
          }
          alt="Skimmer logo"
          width={180}
          height={180}
        />
      </div>
    </div>
  );
};

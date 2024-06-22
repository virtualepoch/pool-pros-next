import styles from "./skimmer.module.css";

export const SkimmerAppInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.flexWrap}>
          <h1 className={styles.heading}>We use the<br/> Skimmer App</h1>

          <img
            className={styles.image}
            src={
              "https://play-lh.googleusercontent.com/mnOAREKT7OQDKGg_wQZUXnM__XMxWWFGj-XgMCtL8bi5PAba_PwBMG3Asf5Bo6fJWQ"
            }
            alt="Skimmer logo"
            width={512}
            height={512}
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

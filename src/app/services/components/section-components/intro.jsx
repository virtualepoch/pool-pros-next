import Image from "next/image";
import styles from "./intro.module.css";

export const Intro = ({ services }) => {
  return (
    <div
      className={styles.intro}
      style={{
        color: services.id === "pool-spa-cleaning" ? "#fff" : "#fff",
        textShadow:
          services.id === "pool-spa-cleaning"
            ? "0 0 4px #000,0 0 4px #000"
            : "0 0 4px #000",
        boxShadow:
          services.id === "pool-spa-cleaning"
            ? "inset 0 2px 10px 1px #fffa"
            : "inset 0 2px 10px 1px #000a",
      }}
    >
      <p
        className={styles.introText}
        style={{
          background:
            services.id === "pool-spa-cleaning"
              ? "none"
              : "radial-gradient(ellipse at center, #0008 50%, #0003)",
        }}
      >
        {services.intro}

        <br />
        <br />

        {services.intro2}

        {services.id === "pool-spa-cleaning" && (
          <>
            <br />
            <br />

            {services.intro3}
          </>
        )}

        {services.id === "pool-closings" && (
          <>
            <br />
            
            {services.intro3}
          </>
        )}
      </p>

      <Image
        className={styles.introImage}
        style={{ objectPosition: services.introImagePosition }}
        width={640}
        height={480}
        src={services.introImage}
        alt="Services page image"
      />
    </div>
  );
};

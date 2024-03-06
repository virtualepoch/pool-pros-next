import styles from "./components.module.css";

export const Intro = ({ services }) => {
  return (
    <div
      className={styles.intro}
      style={{
        color: services.id === "pool-spa-cleaning" ? "#000" : "#fff",
        textShadow:
          services.id === "pool-spa-cleaning" ? "0 0 5px #fff" : "0 0 4px #000",
        backgroundImage: `${
          services.id === "pool-spa-cleaning"
            ? "none"
            : "radial-gradient(ellipse at center, #0007 50%, #0002)"
        }, url(${services.introImage})`,
        backgroundPosition: services.introImagePosition,
        boxShadow:
          services.id === "pool-spa-cleaning"
            ? "inset 0 2px 10px 1px #fffa"
            : "inset 0 2px 10px 1px #000a",
      }}
    >
      <p className={styles.introText}>
        {services.intro}
        <br />
        {services.id === "pool-closings" && <>{services.intro2}</>}
        <br />
        <br />
        {services.id === "pool-closings" && <>{services.intro3}</>}
      </p>
    </div>
  );
};

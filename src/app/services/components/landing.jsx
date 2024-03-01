import { BtnAndModalContact } from "../../components/ui/btn-and-modal-contact";

export const Landing = ({ styles }) => {
  return (
    <div className={styles.landing}>
      <h2 className={styles.heroStatement}>
        The Boise Pool Pros are <span>highly rated, </span>
        <span>certified, </span>
        <span>insured, </span>
        and <span>experienced </span> pool and spa service professionals.
      </h2>

      <BtnAndModalContact addedClass={styles.btnContact} />
    </div>
  );
};

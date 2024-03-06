import { BtnAndModalContact } from "../../components/ui/btn-and-modal-contact";

export const Landing = ({ styles }) => {
  return (
    <div className={styles.landing}>
      <h1 className={styles.heroStatement}>
        Our Professional Pool Services are designed to ensure your pool remains
        a pristine oasis of leisure and luxury.
      </h1>

      <BtnAndModalContact addedClass={styles.btnContact} />
    </div>
  );
};

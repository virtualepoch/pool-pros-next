import { BtnAndModalContact } from "../../components/ui/btn-and-modal-contact";

export const Landing = ({ styles }) => {
  return (
    <div className={styles.landing}>
      <h2 className={styles.heroStatement}>
        Professional Pool Services Engineered to Transform Your Oasis into a
        Masterpiece of Tranquility and Elegance
      </h2>

      <BtnAndModalContact addedClass={styles.btnContact} />
    </div>
  );
};

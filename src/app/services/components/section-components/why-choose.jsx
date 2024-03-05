export const WhyChoose = ({ styles }) => {
  return (
    <div className={styles.sectionWhyChoose}>
      <h3 className={styles.whyChooseHeader}>Why Choose Boise Pool Pros?</h3>
      <ul className={styles.whyChooseList}>
        <li className={styles.whyChooseItem}>
          <div className={styles.whyChooseIcon} />
          <span>Professional and Efficient Service: </span>Our team is committed
          to getting your pool ready as quickly as possible without compromising
          on quality.
        </li>

        <li className={styles.whyChooseItem}>
          <div className={styles.whyChooseIcon} />
          <span>Safety First: </span>We prioritize the safety of your pool and
          your loved ones by adhering to the highest safety standards.
        </li>

        <li className={styles.whyChooseItem}>
          <div className={styles.whyChooseIcon} />
          <span>Transparent Pricing: </span>No hidden fees. We provide clear,
          upfront pricing based on your specific pool or spa service needs.
        </li>

        <li className={styles.whyChooseItem}>
          <div className={styles.whyChooseIcon} />
          <span>Customer Satisfaction Guaranteed: </span>We&apos;re not happy
          until you&apos;re ready to jump in and enjoy your pool.
        </li>
      </ul>
    </div>
  );
};

import Image from "next/image";
import styles from "./why-choose.module.css";

export const WhyChooseGuarantee = () => {
  return (
    <div className={styles.whyChooseGuaranteeWrap}>
      <section className={styles.sectionWhyChoose}>
        <h3 className={styles.whyChooseHeader}>Why Choose Boise Pool Pros?</h3>
        <ul className={styles.whyChooseList}>
          <li className={styles.whyChooseItem}>
            <div className={styles.whyChooseIcon} />
            <span>Professional and Efficient Service: </span>Our team is
            committed to getting your pool ready as quickly as possible without
            compromising on quality.
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
      </section>

      <section className={styles.sectionGuarantee}>
        <h3 className={styles.guaranteeHeader}>Expertise You Can Trust</h3>

        <div className={styles.guaranteeContentWrap}>
          <p className={styles.sectionContent}>
            With over 10 years in the pool service industry, our team of
            certified pool technicians brings expertise, dedication, and a
            meticulous eye for detail to every pool and spa they service.
            We&apos;re committed to using the latest pool cleaning technologies
            and eco-friendly practices to not only maintain your pool&apos;s
            beauty but also its health and longevity.
          </p>

          <Image
            className={styles.guaranteeImage}
            src={"/images/cpo-256.jpg"}
            alt="Services section intro image"
            width={180}
            height={180}
          />
        </div>
      </section>
    </div>
  );
};

import Image from "next/image";

export const Guarantee = ({ styles, services }) => {
  return (
    <div className={styles.guaranteeWrap}>
      <h3 className={styles.guaranteeHeader}>Expertise You Can Trust</h3>

      <div className={styles.guaranteeContentWrap}>
        <p className={styles.sectionContent}>
          With over 10 years in the pool service industry, our team of certified
          pool technicians brings expertise, dedication, and a meticulous eye
          for detail to every pool and spa they service. We're committed to
          using the latest pool cleaning technologies and eco-friendly practices
          to not only maintain your pool's beauty but also its health and
          longevity.
        </p>

        <Image
          className={styles.guaranteeImage}
          src={"/globals/cpo.jpg"}
          alt="Services section intro image"
          width={426}
          height={426}
          style={{ objectPosition: services.guaranteeImagePosition }}
        />
      </div>
    </div>
  );
};

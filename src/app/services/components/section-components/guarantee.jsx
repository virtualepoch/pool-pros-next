import Image from "next/image";

export const Guarantee = ({ styles, services }) => {
  return (
    <div className={styles.guaranteeWrap}>
      <h3 className={styles.guaranteeHeader}>{services.guaranteeHeader}</h3>

      <div className={styles.guaranteeContentWrap}>
        <p className={styles.sectionContent}>{services.guarantee}</p>

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

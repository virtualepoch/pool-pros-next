import Image from "next/image";

export const Section1 = ({ styles, images }) => {
  return (
    <div className={styles.section}>
      <Image
        className={styles.logo}
        src={"/t/9.webp"}
        alt="logo"
        width={400}
        height={400}
      />
    </div>
  );
};

import Image from "next/image";

export const Section1 = ({ styles, images }) => {
  return (
    <div className={styles.section}>
      <Image
        className={styles.logo}
        src={"/gallery/1.jpeg"}
        alt="logo"
        width={640}
        height={480}
      />
    </div>
  );
};
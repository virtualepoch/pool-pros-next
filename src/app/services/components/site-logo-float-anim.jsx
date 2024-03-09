import Image from "next/image";

export const SiteLogoFloatAnim = ({ styles }) => {
  return (
    <div className={styles.siteLogoFloatAnim}>
      <div className={styles.logoFloatWrap}>
        <Image
          className={styles.logoFloat}
          src="/logos/1024.png"
          alt="Floating site logo... hover to animate!"
          width={1024}
          height={1024}
        />
      </div>
    </div>
  );
};
